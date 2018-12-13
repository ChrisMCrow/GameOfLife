import { Politician, Doctor, Teacher, Artist } from './../models/player.js';

export function startGame(player1, player2, player1Prof, player2Prof) {
  return {
    type: 'START_GAME',
    player1,
    player2,
    player1Prof,
    player2Prof
  }
}

export function newPlayer(profName, playerName) {
  if (profName === "Doctor") {
    return new Doctor(playerName);
  } else if (profName === "Teacher") {
    return new Teacher(playerName);
  } else if (profName === "Politician") {
    let playerPolitician = new Politician(playerName);
    return playerPolitician;
  } else if (profName === "Artist") {
    return new Artist(playerName);
  } else {
    console.log("bad name");
    return "error";
  }
}

export function getEvent(currentPlayer) {
  return ({
    type: 'GET_EVENT',
    currentPlayer
  })
}

export function endTurn(events, players) {
  let turn = events.turn;
  let player1GameOver, player2GameOver, currentPlayer;
  if (players.player1.gameOver && players.player2.gameOver) {
    return ({
      type: 'GAME_OVER'
    });
  } else {
    if (turn === 1) {
      if (players.player1.age >= 65) {
        player1GameOver = true;
      }
      if (!players.player2.gameOver) {
        turn++
        currentPlayer = players.player2;
      }
    } else if (events.turn === 2) {
      if (players.player2.age >= 65) {
        player2GameOver = true;
      }
      if (!players.player1.gameOver) {
        turn = 1;
        currentPlayer = players.player1;
      }
    }
    return({
      type: 'NEXT_TURN',
      turn,
      currentPlayer,
      player1GameOver,
      player2GameOver
    })
  }
}