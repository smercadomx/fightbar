import { FETCH_FIGHTS } from '../actions/index.js';

const INITIAL_STATE = { all: [], fight: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_FIGHTS:
    return {...state, all: action.payload};
  default:
    return state;
  }
}
