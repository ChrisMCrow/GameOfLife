import { Teacher, Player } from './../src/player.js';
import { Game } from '../src/game.js';


describe('Game', function() {
    let testGame = new Game("Sally", "Teacher", "Walter", "Doctor");

    it('should use a contstructor to start a new game as well as two new players', function() {
        expect(testGame.player1["profession"]).toEqual("Teacher");
        expect(testGame.player2["profession"]).toEqual("Doctor");
    });

    it('should end the turn and cycle between 1 and 2', function() {
        testGame.turn = 1;
        expect(testGame.turn).toEqual(1);
        testGame.endTurn();
        expect(testGame.turn).toEqual(2);
        testGame.endTurn();
        expect(testGame.turn).toEqual(1);
    });

    it('should skip a players turn if they over 65', function() {
        testGame.player1.age = 66;
        testGame.endTurn();
        testGame.endTurn();
        testGame.gameOver();
        expect(testGame.turn).not.toEqual(1);
    });

    it('should end the game if both players are over 65', function () {
        testGame.player1.age = 65;
        testGame.player2.age = 66;
        expect(testGame.allGameOver()).toEqual(true);
    });

});