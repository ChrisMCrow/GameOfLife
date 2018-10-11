import { Player, Doctor, Teacher, Politician, Artist } from "./player";
import { Event } from "./event";

export class Game {
    
    constructor(player1name, player1profession, player2name, player2profession) {
        this.player1 = Game.createCharacter(player1name, player1profession);
        this.player2 = Game.createCharacter(player2name, player2profession);
        this.turn = 1;
        this.turnPlayer = this.player1;
        this.raiseMultiplier = 1.05;
        this.currentEvent;
    }

    static createCharacter(playerName, playerProfession) {
        if (playerProfession === "Doctor") {
            return new Doctor(playerName);
        } else if (playerProfession === "Teacher" ) {
            return new Teacher(playerName);
        } else if (playerProfession === "Politician") {
            let playerPolitician = new Politician(playerName);
            return playerPolitician;
        } else if (playerProfession === "Artist") {
            return new Artist(playerName);
        } else {
            return "error";
        }
    }

    endTurn() {
        if (this.turn === 1) {
            this.turn++
            this.turnPlayer = this.player2;
        } else {
            this.turn = 1;
            this.turnPlayer = this.player1;
        }
    }

    gameOver() {
        if (this.turn === 1 && this.player1.age >= 65) {
            this.endTurn();
        } else if (this.turn === 2 && this.player2.age >= 65) {
            this.endTurn();
        }
    }

    allGameOver() {
        return (this.player1.age >= 65 && this.player2.age >= 65) ? true : false;
    }

    getNewEvent(player) {
        this.currentEvent = false;
        while(this.currentEvent === false) {
            let index = Event.rollForEvent(player);
            console.log(index);
            this.currentEvent = Event.createEvent(index, player);
        }
    }
}