import { FETCH_FIGHT, FETCH_FIGHTS } from '../actions/index.js';

const INITIAL_STATE = { all: [], fight: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_FIGHTS:
    return {...state, all: action.payload};
  case FETCH_FIGHT:
    return {...state, fight: action.payload};
  default:
    return state;
  }
}
