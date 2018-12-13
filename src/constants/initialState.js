import { Politician, Doctor, Teacher, Artist } from './../models/player.js';

export const initialState = {
  players: {
    player1: null,
    player2: null 
  },
  events: {
    gameInProgress: false
  }
}
