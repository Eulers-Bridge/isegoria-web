import utils from '../../utils';

export default {
  fetchElections (cb, args) {
    const { institutionId } = args;
    // ##TODON'T##
    const { email, password } = args;
    const authHeader = utils.generateBasicAuth(email, password);

    return utils
      .apiFetch(`elections/${institutionId}`, {
        headers: {
          'Authorization': authHeader,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.status !== 200) {
          console.log('Error fetching elections: ', response.status);
          return;
        }
        response.json().then(data => cb(data.foundObjects));
      })
      .catch(error => console.warn('Request failed: ', error))
  },

  fetchCandidates (cb, args) {
    const { election: { electionId } } = args;
    // ##TODON'T##
    const { email, password } = JSON.parse(localStorage.getItem('u'));
    const authHeader = utils.generateBasicAuth(email, password);

    return utils
      .apiFetch(`candidates/${electionId}`, {
        headers: {
          'Authorization': authHeader,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.status !== 200) {
          console.log('Error fetching candidates: ', response.status);
          return;
        }
        response.json().then(data => cb(data.foundObjects));
      })
      .catch(error => console.warn('Request failed: ', error))
  },

  fetchPositions (cb, args) {
    const { election: { electionId } } = args;
    // ##TODON'T##
    const { email, password } = JSON.parse(localStorage.getItem('u'));
    const authHeader = utils.generateBasicAuth(email, password);

    return utils
      .apiFetch(`positions/${electionId}`, {
        headers: {
          'Authorization': authHeader,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.status !== 200) {
          console.log('Error fetching candidates: ', response.status);
          return;
        }
        response.json().then(data => cb(data.foundObjects));
      })
      .catch(error => console.warn('Request failed: ', error))
  },

  fetchTickets (cb, args) {
    const { election: { electionId } } = args;
    // ##TODON'T##
    const { email, password } = JSON.parse(localStorage.getItem('u'));
    const authHeader = utils.generateBasicAuth(email, password);

    return utils
      .apiFetch(`tickets/${electionId}`, {
        headers: {
          'Authorization': authHeader,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.status !== 200) {
          console.log('Error fetching tickets: ', response.status);
          return;
        }
        response.json().then(data => cb(data.foundObjects));
      })
      .catch(error => console.warn('Request failed: ', error))
  }
}
