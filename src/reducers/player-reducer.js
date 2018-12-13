import { Politician, Doctor, Teacher, Artist } from './../models/player.js';
import { initialState } from './../constants/initialState';
import { newPlayer } from './../actions';

export default (state = initialState.players, action) => {
  let newState;
  switch (action.type) {
    case 'ADD_PLAYER':
      newState = Object.assign({}, state);


      // newState.player2.name = action.player2;
      // newState.player1.name = action.player1;
      newState.player1 = newPlayer(action.player1Prof, action.player1);
      newState.player2 = newPlayer(action.player2Prof, action.player2);
      return newState;
    default:
      return state;
  }
}

