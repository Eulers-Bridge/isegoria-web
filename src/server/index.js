import App from '../common/containers/App';
import { Provider } from 'react-redux';
import React from 'react';
import configureStore from '../common/store/configureStore';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import serialize from 'serialize-javascript';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import { fetchStaff } from '../common/api/staff';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    fetchStaff(staff => {
      const context = {};
      const store = configureStore({
        staff
      });
      const sheet = new ServerStyleSheet();
      const markup = renderToString(
        sheet.collectStyles(
          <StaticRouter context={context} location={req.url}>
            <Provider store={store}>
              <App />
            </Provider>
          </StaticRouter>
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
                  ${assets.client.css
                    ? `<link rel="stylesheet" href="${assets.client.css}">`
                    : ''}
                  ${process.env.NODE_ENV === 'production'
                    ? `<script src="${assets.client.js}" defer></script>`
                    : `<script src="${assets.client.js}" defer crossorigin></script>`}
                  ${styleTags}
              </head>
              <body>
                  <div id="root">${markup}</div>
                  <script>
                    window.__INITIAL_STATE__ = ${serialize(initialState)}
                  </script>
                  <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/2895682.js"></script>
              </body>
          </html>`
        );
      }
    })
  });

export default server;
