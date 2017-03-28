import { UPDATE_LOCATION } from '../actions/index.js';

export default function(state = {}, action) {
  switch(action.type) {
  case UPDATE_LOCATION:
    return {...state, location: action.payload};
  default:
    return state;
  }
}
