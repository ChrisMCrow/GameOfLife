import { initialState } from './../constants/initialState';
import { newPlayer } from './../actions';
import Event from './../models/event';

export default (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case 'START_GAME':
      newState = Object.assign({}, state);
      newState.players.player1 = newPlayer(action.player1Prof, action.player1);
      newState.players.player2 = newPlayer(action.player2Prof, action.player2);
      newState.events.gameInProgress = true;
      newState.events.currentPlayer = newState.players.player1;
      newState.events.turn = 1;
      return newState;
    case 'GET_EVENT':
      newState = Object.assign({}, state);
      let index = Event.rollForEvent(action.currentPlayer)
      newState.events.currentEvent = Event.createEvent(index, action.currentPlayer)
      return newState;
    case 'NEXT_TURN':
      newState = Object.assign({}, state);
      newState.events.turn = action.turn;
      newState.events.currentPlayer = action.currentPlayer;
      newState.players.player1.gameOver = action.player1GameOver;
      newState.players.player2.gameOver = action.player2GameOver;
      return newState;
    case 'GAME_OVER':
      newState = Object.assign({}, state);
      newState.events.gameOver = true;
      return newState;
    default:
      return state;
  }
}