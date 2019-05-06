import fetch from 'isomorphic-fetch';

const API_BASE = {
  development: 'http://localhost:8080/api',
  production: 'https://isegoria.app/api'
}[process.env.NODE_ENV]

// ##TODO## :: Merge
const CONTENT_TYPES = {
  article: {
    slug: 'articles',
    title: 'Articles'
  },
  event: {
    slug: 'events',
    title: 'Events'
  },
  photo: {
    slug: 'photos',
    title: 'Photos'
  }
}
const COUNTRIES = [
  "Australia",
  "United States",
  "United Kingdom",
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands",
  "Colombia",
  "Comoros",
  "Congo",
  "Congo, The Democratic Republic of The",
  "Cook Islands",
  "Costa Rica",
  "Cote D'ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands (Malvinas)",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guinea",
  "Guinea-bissau",
  "Guyana",
  "Haiti",
  "Heard Island and Mcdonald Islands",
  "Holy See (Vatican City State)",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran, Islamic Republic of",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, Democratic People's Republic of",
  "Korea, Republic of",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libyan Arab Jamahiriya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Macedonia, The Former Yugoslav Republic of",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia, Federated States of",
  "Moldova, Republic of",
  "Monaco",
  "Mongolia",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestinian Territory, Occupied",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "Saint Helena",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Pierre and Miquelon",
  "Saint Vincent and The Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and The South Sandwich Islands",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Timor-leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "United States Minor Outlying Islands",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Viet Nam",
  "Virgin Islands, British",
  "Virgin Islands, U.S.",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe"
]
const ELECTION_TYPES = {
  election: {
    slug: 'elections',
    title: 'Elections'
  },
  position: {
    slug: 'positions',
    title: 'Positions'
  },
  candidate: {
    slug: 'candidates',
    title: 'Candidates'
  },
  ticket: {
    slug: 'tickets',
    title: 'Tickets'
  }
}
const POLL_TYPES = {
  poll: {
    slug: 'polls',
    title: 'Polls'
  }
}

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
    API_BASE,
    CONTENT_TYPES,
    COUNTRIES,
    ELECTION_TYPES,
    POLL_TYPES
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
      return this.apiFetch(path, Object.assign({
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }, init))
    },
    apiPut: function (path, init) {
      return this.apiFetch(path, Object.assign({
        method: 'put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }, init))
    },
    externalPost: function (path, init) {
      return this.externalFetch(path, Object.assign({
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }, init))
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

    formatDateToYMD: function (timestamp) {
      const d = new Date(timestamp)
      const month = `${d.getMonth() + 1}`
      const displayMonth = month.length < 2 ? '0' + month : month
      const day = `${d.getDate()}`
      const displayDay = day.length < 2 ? '0' + day : day
      const year = d.getFullYear()

      return `${year}-${displayMonth}-${displayDay}`
    },

    queryStringToObject: function (queryString) {
      const params = new URLSearchParams(queryString)
      return Array.from(params.keys()).reduce((result, param) =>
        Object.assign({},
          result,
          {[param]: params.get(param)}
        ), {});
    },

    truncate: function (str, len) {
      return `${str.slice(0, len)}${str.length > len ? '...' : ''}`
    }
  }
);

export default utils;
