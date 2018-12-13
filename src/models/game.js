// import { Player, Doctor, Teacher, Politician, Artist } from "./player";
// import { Event } from "./event";
// import { runInThisContext } from "vm";

// export class Game {

//   constructor(player1name, player1profession, player2name, player2profession) {
//     this.player1 = Game.createCharacter(player1name, player1profession);
//     this.player2 = Game.createCharacter(player2name, player2profession);
//     this.turn = 1;
//     this.turnPlayer = this.player1;
//     this.raiseMultiplier = 1.05;
//     this.currentEvent;
//     this.gameOver = false;
//   }

//   static createCharacter(playerName, playerProfession) {
//     if (playerProfession === "Doctor") {
//       return new Doctor(playerName);
//     } else if (playerProfession === "Teacher") {
//       return new Teacher(playerName);
//     } else if (playerProfession === "Politician") {
//       let playerPolitician = new Politician(playerName);
//       return playerPolitician;
//     } else if (playerProfession === "Artist") {
//       return new Artist(playerName);
//     } else {
//       return "error";
//     }
//   }

//   endTurn() {
//     if (!this.gameOver) {
//       if (this.turn === 1) {
//         if (this.player1.age >= 65) {
//           this.player1.gameOver = true;
//         }
//         if (!this.player2.gameOver) {
//           this.turn++
//           this.turnPlayer = this.player2;
//         }
//       } else if (this.turn === 2) {
//         if (this.player2.age >= 65) {
//           this.player2.gameOver = true;
//         }
//         if (!this.player1.gameOver) {
//           this.turn = 1;
//           this.turnPlayer = this.player1;
//         }
//       }
//     }
//     if (this.player1.gameOver && this.player2.gameOver) {
//       this.gameOver = true;
//     }
//   }


//   getNewEvent(player) {
//     this.currentEvent = false;
//     while (this.currentEvent === false) {
//       let index = Event.rollForEvent(player);
//       this.currentEvent = Event.createEvent(index, player);
//     }
//   }
// }