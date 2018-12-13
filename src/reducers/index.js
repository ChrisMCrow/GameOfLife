
import eventReducer from './event-reducer';
import playerReducer from './player-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  events: eventReducer,
  players: playerReducer
});

export default rootReducer;