import electionsApi from '../api/elections';

export const FETCH_ELECTIONS = 'FETCH_ELECTIONS';
export const RECEIVE_ELECTIONS = 'RECEIVE_ELECTIONS';

export const RECEIVE_ELECTION_UPDATE_RESULT = 'RECEIVE_CONTENT_UPDATE_RESULT';

export const FETCH_CANDIDATES = 'FETCH_CANDIDATES ';
export const RECEIVE_CANDIDATES  = 'RECEIVE_CANDIDATES ';

export const FETCH_POSITIONS = 'FETCH_POSITIONS ';
export const RECEIVE_POSITIONS  = 'RECEIVE_POSITIONS ';

export const FETCH_TICKETS = 'FETCH_TICKETS';
export const RECEIVE_TICKETS = 'RECEIVE_TICKETS';

export function fetchElections (args) {
  return dispatch =>
    electionsApi.fetchElections(
      results => Promise.all([
        ...results.map(election => [
          dispatch(fetchCandidates({election})),
          dispatch(fetchPositions({election})),
          dispatch(fetchTickets({election})),
        ]),
        dispatch(receiveElections(results))
      ]),
      args
    )
}

export function postElection (cb, election) {
  return dispatch =>
    electionsApi.updateOrCreateElection(result => {
      dispatch(receiveElectionUpdateResult(result))
      cb(result)
    }, { election })
    // ##TODO## :: Use Redux for cb equivalent
}

export function postCandidate (cb, candidate) {
  return dispatch =>
    electionsApi.updateOrCreateCandidate(result => {
      dispatch(receiveElectionUpdateResult(result))
      cb(result)
    }, { candidate })
    // ##TODO## :: Use Redux for cb equivalent
}

export function postTicket (cb, ticket) {
  return dispatch =>
    electionsApi.updateOrCreateTicket(result => {
      dispatch(receiveElectionUpdateResult(result))
      cb(result)
    }, { ticket })
    // ##TODO## :: Use Redux for cb equivalent
}

export function receiveElections ( results ) {
  return { type: RECEIVE_ELECTIONS, payload: results }
}

export function receiveElectionUpdateResult (result) {
  return { type: RECEIVE_ELECTION_UPDATE_RESULT, payload: result}
}


export function fetchCandidates (args) {
  return dispatch =>
    electionsApi.fetchCandidates(
      results => dispatch(receiveCandidates(results)),
      args
    )
}

export function receiveCandidates ( results ) {
  return { type: RECEIVE_CANDIDATES, payload: results }
}

export function fetchPositions (args) {
  return dispatch =>
    electionsApi.fetchPositions(
      results => dispatch(receivePositions(results)),
      args
    )
}

export function receivePositions ( results ) {
  return { type: RECEIVE_POSITIONS, payload: results }
}

export function fetchTickets (args) {
  return dispatch =>
    electionsApi.fetchTickets(
      results => dispatch(receiveTickets(results)),
      args
    )
}

export function receiveTickets ( results ) {
  return { type: RECEIVE_TICKETS, payload: results }
}
