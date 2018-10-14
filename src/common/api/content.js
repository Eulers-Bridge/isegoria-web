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
  }
}

