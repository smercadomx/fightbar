import { combineReducers } from 'redux';
import FightsReducer from './fights.js';

const rootReducer = combineReducers({
  fights: FightsReducer
});

export default rootReducer;
