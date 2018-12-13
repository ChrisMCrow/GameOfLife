import { initialState } from './../constants/initialState';

export default (state = initialState.events, action) => {
  let newState;
  switch (action.type) {
  case 'START_GAME':
    newState = Object.assign({}, state);
    newState.gameInProgress = true;
    return newState;
  default: 
    return state;
  }
};
