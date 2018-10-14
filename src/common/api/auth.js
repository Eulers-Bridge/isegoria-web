import utils from '../../utils';

export default {
  attemptLogin (cb, args) {
    const { email, password } = args;
    const authHeader = utils.generateBasicAuth(email, password);

    return utils
      .apiFetch('login', {
        headers: {
          'Authorization': authHeader,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.status !== 200) {
          console.log('Error logging in: ', response.status);
          return;
        }
        response.json().then(data => cb(data));
      })
      .catch(error => console.warn('Request failed: ', error))
  }
}
