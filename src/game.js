import { Player, Doctor, Teacher, Politician, Artist } from "./player";
import { Event } from "./event";

export class Game {
    
    constructor(player1name, player1profession, player2name, player2profession) {
        this.player1 = Game.createCharacter(player1name, player1profession);
        this.player2 = Game.createCharacter(player2name, player2profession);
        this.turn = Math.ceil(Math.random(0,2));
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
        } else {
            this.turn = 1;
        }
    }

    getNewEvent(player) {
        let index = Event.rollForEvent(player)
        this.currentEvent = Event.createEvent(index, player);
    }
}