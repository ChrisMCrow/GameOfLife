import { Teacher, Player } from './../src/player.js';
import { Game } from '../src/game.js';

describe('Player', function() {
    let samplePlayer;
    let testGame;

    beforeEach(function() {
        samplePlayer = new Teacher("Sally");
        samplePlayer.salary = 50000;
        testGame = new Game("Sally", "Teacher", "Walter", "Doctor");
        testGame.player1.salary = 50000;
        testGame.player1.bank = 100;
    });    

    it('should use the getPaid method to validate add the players salary to their bank', function() {
        let startingAmount = samplePlayer.bank;
        samplePlayer.getPaid();
        expect(samplePlayer.bank).toEqual(startingAmount + samplePlayer.salary);
    });

    it('should use the getRaise method to alter the players base salaray', function() {
        let startingSalary = samplePlayer.salary;
        samplePlayer.getRaise(testGame.raiseMultiplier);
        expect(samplePlayer.salary).toEqual(startingSalary * testGame.raiseMultiplier);
    });

    it('should add age to a player using the addAge method', function() {
        samplePlayer.addAge();
        expect(samplePlayer.age).toEqual(23);
        samplePlayer.addAge(3);
        expect(samplePlayer.age).toEqual(26);
    });

    it('should properly account for cost of transportation', function() {
        testGame.player1.costOfLiving();           
        expect(testGame.player1.bank).toEqual(-18900); //car no loan
        let car = testGame.player1.inventory.indexOf("Car");
        testGame.player1.inventory.splice(car, 1);
        testGame.player1.costOfLiving();
        expect(testGame.player1.bank).toEqual(-37400); //no car
        expect(testGame.player1.inventory.includes("Car")).toEqual(false);
        testGame.player1.mortgage = 2;
        testGame.player1.costOfLiving();        
        expect(testGame.player1.bank).toEqual(-55900); //car with loan
    });

    it('should properly account for cost of houses', function() {
        testGame.player1.inventory.push("House");
        testGame.player1.costOfLiving();
        expect(testGame.player1.bank).toEqual(-9400); //house no loan
        expect(testGame.player1.inventory.includes("House")).toEqual(true);        
        testGame.player1.inventory.push("House");
        testGame.player1.costOfLiving();
        expect(testGame.player1.bank).toEqual(-18900); //house no with loan
        let house = testGame.player1.inventory.indexOf("House");
        testGame.player1.inventory.splice(house, 1);
        testGame.player1.costOfLiving();
        expect(testGame.player1.bank).toEqual(-28400); //no house, renting                  
    });    

    it('should properly account for cost of insurance', function() {
        testGame.player1.costOfLiving();
        expect(testGame.player1.bank).toEqual(-18900); //no insurance
        testGame.player1.inventory.push("Insurance");
        testGame.player1.costOfLiving();        
        expect(testGame.player1.bank).toEqual(-51100); //with insurance        
        expect(testGame.player1.inventory.includes("Insurance")).toEqual(true);        
    });

    it('should properly account for taxes on salary', function() {
        testGame.player1.costOfLiving();
        expect(testGame.player1.bank).toEqual(-18900); //50000 salary, bottom tier
        testGame.player1.salary = 100000;  
        testGame.player1.costOfLiving();        
        expect(testGame.player1.bank).toEqual(-60400); //100000 salary, bottom tier
        testGame.player1.salary = 200000;
        testGame.player1.costOfLiving();          
        expect(testGame.player1.bank).toEqual(-151900); //200000 salary, bottom tier
    });      

    it('should properly return all 4 players to display on the main webpage', function() {
        let playerArr = Player.getAllPlayerStats();
        expect(playerArr[0].profession).toEqual("Doctor");
        expect(playerArr[1].profession).toEqual("Teacher");
        expect(playerArr[2].profession).toEqual("Politician");
        expect(playerArr[3].profession).toEqual("Artist");
    });

    it('should add multiple items to a players inventory using addInventory method', function() {
        samplePlayer.addInventory(["House", "Insurance"]);
        expect(samplePlayer.inventory.length).toEqual(3);
    });

    it('should remove items from inventory using removeInventory method', function() {
        samplePlayer.removeInventory("Car");
        expect(samplePlayer.inventory.length).toEqual(0);
    });

    it('should add multiple attributes to a players inventory using addAttribute method', function() {
        samplePlayer.addAttribute(["Charisma", "Organization"]);
        expect(samplePlayer.attributes.length).toEqual(4);
    });

    it('should remove attributes from players using removeAttribute method', function() {
        samplePlayer.removeAttribute("Knowledge");
        expect(samplePlayer.attributes.length).toEqual(1);
    });

});