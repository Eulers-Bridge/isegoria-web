import fetch from 'isomorphic-fetch';

const API_BASE = {
  development: 'http://localhost:8080/dbinterface/api',
  production: 'http://54.206.36.220/dbinterface/api'
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
    }
  }
);

export default utils;
