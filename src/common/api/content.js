import utils from '../../utils';

export default {
  fetchArticles (cb, args) {
    const { institutionId } = args;
    // ##TODON'T##
    const { email, password } = args;
    const authHeader = utils.generateBasicAuth(email, password);

    return utils
      .apiFetch(`newsArticles/${institutionId}`, {
        headers: {
          'Authorization': authHeader,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.status !== 200) {
          console.log('Error fetching articles: ', response.status);
          return;
        }
        response.json().then(data => cb(data.foundObjects));
      })
      .catch(error => console.warn('Request failed: ', error))
  },

  fetchEvents (cb, args) {
    const { institutionId } = args;
    // ##TODON'T##
    const { email, password } = args;
    const authHeader = utils.generateBasicAuth(email, password);

    return utils
      .apiFetch(`events/${institutionId}`, {
        headers: {
          'Authorization': authHeader,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.status !== 200) {
          console.log('Error fetching events: ', response.status);
          return;
        }
        response.json().then(data => cb(data.foundObjects));
      })
      .catch(error => console.warn('Request failed: ', error))
  },

  fetchPhotos (cb, args) {
    const { userId } = args;
    // ##TODON'T##
    const { email, password } = args;
    const authHeader = utils.generateBasicAuth(email, password);

    return utils
      .apiFetch(`photos/${userId}`, {
        headers: {
          'Authorization': authHeader,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.status !== 200) {
          console.log('Error fetching photos: ', response.status);
          return;
        }
        response.json().then(data => cb(data.photos));
      })
      .catch(error => console.warn('Request failed: ', error))
  },

  fetchPolls (cb, args) {
    const { institutionId } = args;
    // ##TODON'T##
    const { email, password } = args;
    const authHeader = utils.generateBasicAuth(email, password);

    return utils
      .apiFetch(`polls/${institutionId}`, {
        headers: {
          'Authorization': authHeader,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.status !== 200) {
          console.log('Error fetching polls: ', response.status);
          return;
        }
        response.json().then(data => cb(data.polls));
      })
      .catch(error => console.warn('Request failed: ', error))
  },

  updateOrCreateArticle(cb, args) {
    const { article } = args
    if (!process.env.NODE_ENV === 'production') {
      console.log(`Updating: `, article)
    }
    // ##TODON'T## :: ID mapping is a bit awkward...
    const { articleId: id } = article
    const url = `newsArticle/${id ? id : ''}`
    // ##TODO## :: Think about where to put this
    article.date = (Date.parse(article.date))
    // ##TODON'T##
    const callFunction = (id ? utils.apiPut : utils.apiPost).bind(utils)
    // ##TODON'T##
    const { email, password } = article;
    const authHeader = utils.generateBasicAuth(email, password);

    return callFunction(url, {
      body: JSON.stringify(article),
      headers: {
        'Accept': 'application/json',
        'Authorization': authHeader,
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        cb(res)
      })
      .catch(error => {
        cb({
          message: error,
          status: 500
        })
      })
  }
}
