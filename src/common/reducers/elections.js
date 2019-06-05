import * as ElectionsActions from '../actions/elections';

// ##TODO## :: Map items so we can `elections.${type}.${id}`
const elections = (state = {
  candidate: [],
  election: [],
  position: [],
  ticket: []
}, action) => {
  const { election } = state
  switch (action.type) {
    case ElectionsActions.RECEIVE_ELECTIONS:
      return {
        ...state,
        // ##TODO## :: { id: data } and merge
        election: action.payload
      }

    case ElectionsActions.RECEIVE_CANDIDATES:
      return {
        ...state,
        // ##TODO## :: { id: data } and merge
        election: election.map(e => Object.assign({},
          {...e}, {candidates: action.payload}
        )),
        candidate: action.payload
      }

    case ElectionsActions.RECEIVE_POSITIONS:
      return {
        ...state,
        // ##TODO## :: { id: data } and merge
        election: election.map(e => Object.assign({},
          {...e}, {positions: action.payload}
        )),
        position: action.payload
      }

    case ElectionsActions.RECEIVE_TICKETS:
      return {
        ...state,
        election: election.map(e => Object.assign({},
          {...e}, {tickets: action.payload}
        )),
        // ##TODO## :: { id: data } and merge
        ticket: action.payload
      }

    default:
      return state;
  }
}

export default elections;
