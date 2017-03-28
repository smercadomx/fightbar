import { combineReducers } from 'redux';
import FightsReducer from './fights.js';
import LocationReducer from './location.js';

const rootReducer = combineReducers({
  fights: FightsReducer,
  location: LocationReducer
});

export default rootReducer;
