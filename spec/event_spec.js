import { Player, Teacher, Doctor, Artist, Politician } from './../src/player.js';
import { Game } from '../src/game.js';
import { Event } from '../src/event.js';

describe('Player', function() {
    let doctor;
    let teacher;
    let artist;
    let politician;
    let doctorTeacherGame;

    beforeEach(function() {
        doctor = new Doctor("Walter");
        teacher = new Teacher("Sally");
        artist = new Artist("Rocko");
        politician = new Politician("Donald");
        doctorTeacherGame = new Game("Sally", "Teacher", "Walter", "Doctor");
    });
    
    it('should run the event "Find Side Hustle" successfully', function () {
        let startingAmount = doctor.bank;
        Event.createEvent(0, doctor);
        expect(doctor.bank).toEqual(startingAmount + 5000);
    });

    it('should run the event "Natural Disaster" successfully', function () {
        let politicianStartingBalance = politician.bank;
        let doctorStartingBalance = doctor.bank;
        politician.addInventory(["Car"]);
        Event.createEvent(4, politician);
        Event.createEvent(4, doctor);
        expect(politician.inventory).not.toContain("House");
        expect(politician.inventory).not.toContain("Car");
        expect(politician.bank).toEqual(politicianStartingBalance - 30000);
        expect(doctor.bank).toEqual(doctorStartingBalance - 10000);
    });

    it('should run the event "Leadership Opportunity" successfully', function () {
        let politicianSalary = politician.salary;
        let artistBank = artist.bank;
        Event.createEvent(6, politician);
        Event.createEvent(6, artist);
        expect(politician.salary).toEqual(politicianSalary + 10000);
        expect(artist.bank).toEqual(artistBank + 10000);
    });
});
