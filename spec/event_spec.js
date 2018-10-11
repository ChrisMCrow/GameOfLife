import { Player, Teacher, Doctor, Artist, Politician } from './../src/player.js';
import { Game } from '../src/game.js';
import { Event } from '../src/event.js';

describe('Event', function() {
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
    
    //Inventory Modifiers - Additions
    it('should run the event "Partner for a Lifetime" successfully', function () {
        let doctorSalary = doctor.salary;
        Event.createEvent(0, doctor);
        expect(doctor.salary).toEqual(doctorSalary * 1.5);
        expect(doctor.inventory).toContain("Spouse");
    });

    it('should run the event "Little Bundle of Joy" successfully', function () {
        let doctorSalary = doctor.salary;
        Event.createEvent(1, doctor);
        expect(doctor.salary).toEqual(doctorSalary * 1.2);
        expect(doctor.inventory).toContain("Child");
    });

    it('should run the event "Double the Trouble" successfully', function () {
        let doctorSalary = doctor.salary;
        Event.createEvent(2, doctor);
        expect(doctor.salary).toEqual(doctorSalary * 1.4);
        expect(doctor.inventory).toContain("Child");
        expect(doctor.inventory.length).toEqual(4);
    });

    it('should run the event "Buy a House" successfully', function () {
        let doctorBank = doctor.bank;
        Event.createEvent(3, doctor);
        expect(doctor.inventory).toContain("House");
        expect(doctor.bank).toEqual(doctorBank - doctor.salary);
        expect(doctor.mortgage).toEqual(15);
    });

    it('should run the event "Buy a Car" successfully', function () {
        Event.createEvent(4, artist);
        expect(artist.inventory).toContain("Car");
        expect(artist.autoLoan).toEqual(5);
    });
    
    it('should run the event "Being Prepared" successfully', function () {
        Event.createEvent(5, artist);
        expect(artist.inventory).toContain("Insurance");
    });

    //Inventory Modifiers - Removals
    it('should run the event "The Call You Never Want to Get" successfully', function () {
        let artistSalary = artist.salary;
        let artistBank = artist.bank;
        Event.createEvent(9, artist);
        expect(artist.inventory).not.toContain("Spouse");
        expect(artist.salary).toEqual(artistSalary - artistSalary * .5);
        expect(artist.bank).toEqual(artistBank - 25000);
    });

    it('should run the event "Empty Nest" successfully', function () {
        let artistSalary = artist.salary;
        artist.addInventory(["Child", "Child"]);
        Event.createEvent(10, artist);
        expect(artist.inventory).not.toContain("Child");
        expect(artist.salary).toEqual(artistSalary * .75);
    });

    it('should run the event "Sell the House" successfully', function () {
        politician.mortgage = 10;
        Event.createEvent(11, politician);
        expect(politician.inventory).not.toContain("House");
        expect(politician.bank).toEqual((politician.salary * 6) - (10 * politician.salary * .35));
        expect(politician.mortgage).toEqual(0);
    });

    it('should run the event "Fixing Traffic" successfully', function () {
        let teacherBank = teacher.bank;
        teacher.autoLoan = 3;
        Event.createEvent(12, teacher);
        expect(teacher.inventory).not.toContain("Car");
        expect(teacher.bank).toEqual(teacherBank + teacher.salary * .1 * 3);
    });

    it('should run the event "Taking Your Chances" successfully', function () {
        Event.createEvent(13, doctor);
        expect(doctor.inventory).not.toContain("Insurance");
    });

    //Attribute Modifiers
    //gain
    it('should run the event "Hitting the Books" successully', function () {
        Event.createEvent(16, artist);
        expect(artist.attributes).toContain("Knowledge");
    });

    it('should run the event "More Talk, Less Action" successully', function () {
        Event.createEvent(17, doctor);
        expect(doctor.attributes).toContain("Charisma");
    });
    
    it('should run the event "Losing Your Touch" successully', function () {
        Event.createEvent(18, doctor);
        expect(doctor.attributes).toContain("Creativity");
    });
    
    it('should run the event "Organized life" successully', function () {
        Event.createEvent(19, artist);
        expect(artist.attributes).toContain("Organization");
    });    
    //lose
    it('should run the event "Couch Potato" successully', function () {
        Event.createEvent(20, doctor);
        expect(doctor.attributes).not.toContain("Knowledge");
    });
    
    it('should run the event "Failed On Stage" successully', function () {
        Event.createEvent(21, artist);
        expect(artist.attributes).not.toContain("Charisma");
    });
    
    it('should run the event "Writers Block" successully', function () {
        Event.createEvent(22, artist);
        expect(artist.attributes).not.toContain("Creativity");
    });
    
    it('should run the event "Hoarding" successully', function () {
        Event.createEvent(23, doctor);
        expect(doctor.attributes).not.toContain("Organization");
    });

    //Opportunities
    it('should run the event "Aunt Tildas Will" successfully', function () {
        let startingAmount = doctor.bank;
        Event.createEvent(32, doctor);
        expect(doctor.bank).toEqual(startingAmount + 100000);
    });

    it('should run the event "Find Side Hustle" successfully', function () {
        let startingAmount = doctor.bank;
        Event.createEvent(33, doctor);
        expect(doctor.bank).toEqual(startingAmount + 5000);
    });
    
    it('should run the event "Leadership Opportunity" successfully', function () {
        let politicianSalary = politician.salary;
        let artistBank = artist.bank;
        Event.createEvent(34, politician);
        Event.createEvent(34, artist);
        expect(politician.salary).toEqual(politicianSalary + 10000);
        expect(artist.bank).toEqual(artistBank + 10000);
    });

    it('should run the event "Party Planning" successfully', function () {
        let artistBank = artist.bank;
        let doctorBank = doctor.bank;
        Event.createEvent(35, artist);
        Event.createEvent(35, doctor);
        expect(artist.bank).toEqual(artistBank + 20000);
        expect(doctor.bank).toEqual(doctorBank + 7000);
    });

    it('should run the event "Start Your Own Business" successfully', function () {
        let politicianSalary = politician.salary;
        let teacherSalary = teacher.salary;
        Event.createEvent(36, politician);
        Event.createEvent(36, teacher);
        expect(politician.salary).toEqual(politicianSalary + 10000);
        expect(teacher.salary).toEqual(teacherSalary + 3000);
    });

    it('should run the event "Teaching Gig" successfully', function () {
        let teacherSalary = teacher.salary;
        let politicianBank = politician.bank;
        Event.createEvent(37, teacher);
        Event.createEvent(37, politician);
        expect(teacher.salary).toEqual(teacherSalary + 10000);
        expect(politician.bank).toEqual(politicianBank + 10000);
    });


    //Hardships
    it('should run the event "Can Anybody Find Me Somebody to Love" successfully', function () {
        let artistBank = artist.bank;
        let politicianBank = politician.bank;
        Event.createEvent(48, artist);
        Event.createEvent(48, politician);
        expect(artist.bank).toEqual(artistBank - 5000);
        expect(politician.bank).toEqual(politicianBank - politician.salary);
    });

    it('should run the event "Natural Disaster" successfully', function () {
        let politicianStartingBalance = politician.bank;
        let doctorStartingBalance = doctor.bank;
        politician.addInventory(["Car"]);
        Event.createEvent(49, politician);
        Event.createEvent(49, doctor);
        expect(politician.inventory).not.toContain("House");
        expect(politician.inventory).not.toContain("Car");
        expect(politician.bank).toEqual(politicianStartingBalance - 30000);
        expect(doctor.bank).toEqual(doctorStartingBalance - 10000);
    });

    it('should run the event "Cookies that are NOT Free" successfully', function () {
        let artistBank = artist.bank;
        artist.addInventory(["Child"]);
        let politicianBank = politician.bank;
        Event.createEvent(50, artist);
        Event.createEvent(50, politician);
        expect(artist.bank).toEqual(artistBank - 4000);
        expect(politician.bank).toEqual(politicianBank - 10000);
    });

    it('should run the event "An Arm and a Leg in Rent" successfully', function () {
        let politicianSalary = politician.salary;
        let teacherSalary = teacher.salary;
        Event.createEvent(51, politician);
        Event.createEvent(51, teacher);
        expect(politician.salary).toEqual(politicianSalary - 4000);
        expect(teacher.salary).toEqual(teacherSalary - 10000);
    }); 
    
    it('should run the event "An Uber Hardship" successfully', function () {
        let teacherBank = teacher.bank;
        let politicianBank = politician.bank;
        Event.createEvent(52, teacher);
        Event.createEvent(52, politician);
        expect(teacher.bank).toEqual(teacherBank - 8000);
        expect(politician.bank).toEqual(politicianBank - 25000);
    });    

});
