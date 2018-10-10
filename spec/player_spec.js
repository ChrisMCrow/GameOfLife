import { Teacher, Doctor } from './../src/player.js';
import { Game } from '../src/game.js';

describe('Player', function() {
    let samplePlayer = new Teacher("Sally");
    let testGame = new Game("Sally", "Teacher", "Walter", "Doctor");

    it('should use the getPaid method to validate add the players salary to their bank', function() {
        samplePlayer.getPaid();
        expect(samplePlayer.bank).toEqual(samplePlayer.bank + samplePlayer.salary);
    });

    it('should use the getRaise method to alter the players base salaray', function() {
        samplePlayer.getRaise(testGame.raiseMultiplier);
        expect(samplePlayer.salary).toEqual(samplePlayer.salary * testGame.raiseMultiplier);
    });

    it('should add age to a player using the addAge method', function() {
        samplePlayer.addAge();
        expect(samplePlayer.age).toEqual(23);
        samplePlayer.addAge(3);
        expect(samplePlayer.age).toEqual(26);
    });

    it('should properly account for cost of living expenses', function() {
        //write test here
    });
});

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
});