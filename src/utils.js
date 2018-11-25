import fetch from 'isomorphic-fetch';

const API_BASE = {
  development: 'http://localhost:8080/dbinterface/api',
  production: 'https://isegoria.app/api'
}[process.env.NODE_ENV]

class HttpError extends Error {
  constructor(status, message) {
    super(message)
    this.status = status || 500
    this.message = message || status || ''
    this.name = 'HttpError'
  }
}

const rawFetch = function (path, init) {
  const initDefaults = {
    method: 'get',
    headers: {
      'Accept': 'application/json'
    }
  }

  if (process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'local') {
    console.log(`FETCHING ${path}`)
  }

  return fetch(path, Object.assign(initDefaults, init))
}

const utils = Object.assign({},
  {
    API_BASE
  },
  {
    // Redirect the user to a 404 page
    apiErrorRedirect: function () {
      if (typeof document !== 'undefined') {
        document.location = '/404/'
      } else {
        throw new HttpError(404, 'Page not found')
      }
    },
    // Make HTTP calls to fetch data, convenience wrappers for our wrapper
    apiFetch: function (path, init) {
      return rawFetch(`${API_BASE}/${path}`, init)
    },
    externalFetch: function (path, init) {
      return rawFetch(path, init)
    },
    apiPost: function (path, init) {
      return this.apiFetch(path, Object.assign(init, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }))
    },
    externalPost: function (path, init) {
      return this.externalFetch(path, Object.assign(init, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }))
    },
    generateBasicAuth: function (username, password) {
      const encodedCreds = btoa(`${username}:${password}`);
      return `Basic ${encodedCreds}`
    },

    // String formatting / output
    formatDate: function (timestamp) {
      const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }

      return new Date(timestamp).toLocaleDateString('en-US', options)
    },

    truncate: function (str, len) {
      return `${str.slice(0, len)}${str.length > len ? '...' : ''}`
    }
  }
);

export default utils;