
export const initialState = {
  players: {
    player1: null,
    player2: null 
  },
  events: {
    gameInProgress: false,
    turn: null,
    currentPlayer: null,
    raiseMultiplier: 1.05,
    gameOver: false,
    currentEvent: null
  }
}
