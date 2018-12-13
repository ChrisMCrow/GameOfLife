import { Politician, Doctor, Teacher, Artist } from './../models/player.js';

export function addPlayer(player1, player2, player1Prof, player2Prof) {
  return {
    type: 'ADD_PLAYER',
    player1,
    player2,
    player1Prof,
    player2Prof
  }
}

export function startGame() {
  return {
    type: 'START_GAME'
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
