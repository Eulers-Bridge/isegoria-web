import App from '../common/containers/App';
import { Provider } from 'react-redux';
import React from 'react';
import configureStore from '../common/store/configureStore';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import serialize from 'serialize-javascript';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { createMemoryHistory } from 'history';

import { fetchStaff } from '../common/api/staff';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    fetchStaff(staff => {
      const context = {};
      const history = createMemoryHistory()
      const store = configureStore({
        staff
      }, history);
      const sheet = new ServerStyleSheet();
      const markup = renderToString(
        sheet.collectStyles(
          <Provider store={store}>
            <StaticRouter context={context} location={req.url}>
              <App />
            </StaticRouter>
          </Provider>
        )
      );
      const styleTags = sheet.getStyleTags();

      const initialState = store.getState();

      if (context.url) {
        res.redirect(context.url);
      } else {
        res.status(200).send(
          `<!doctype html>
            <html lang="">
              <head>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta charset="utf-8" />
                <title>Isegoria</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">

                <noscript id="jss-insertion-point"></noscript>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

                ${assets.client.css
                  ? `<link rel="stylesheet" href="${assets.client.css}">`
                  : ''}
                  ${styleTags}
              </head>
              <body>
                <div id="root">${markup}</div>
                <script>
                  window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
                  window.__INITIAL_STATE__ = ${serialize(initialState)};
                </script>
                ${process.env.NODE_ENV === 'production'
                  ? `<script src="${assets.client.js}" defer></script>`
                  : `<script src="${assets.client.js}" defer crossorigin></script>`}
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-91233938-1"></script>
                <script>
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'UA-91233938-1');
                </script>
              </body>
          </html>`
        );
      }
    })
  });

export default server;
