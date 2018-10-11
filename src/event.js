import { Player, Doctor, Teacher, Politician, Artist } from "./player";

export class Event {

    constructor(index, name, description) {
        this.index = index
        this.name = name;
        this.description = description;
    }

    static rollForEvent(player) {
        //insert code to get index of event to be returned.
        //for example, if random.10 === 1, return index 1
        // if random.5 == 2 and player.age > 30 return index 2 etc
        return 0;
    }    
    

    static createEvent(index) {
        switch (index) {
            case 1:
                let name = "Find Money";
                let description = "You are walking down the street and happen upon $1,000";
                let newEvent = new Event(index, name, description);
                return newEvent;
            case 2:
                let newEvent = new Event(index, name, description);                
                return newEvent;
            case 3:
                let newEvent = new Event(index, name, description);                
                return newEvent;
            case 4:
                let newEvent = new Event(index, name, description);                
                return newEvent;
            case 5:
                let newEvent = new Event(index, name, description);                
                return newEvent;
            case 6:
                let newEvent = new Event(index, name, description);
                return newEvent;
            default:

        }
    }
}

