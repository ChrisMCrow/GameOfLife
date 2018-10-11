import { Player, Doctor, Teacher, Politician, Artist } from "./player";
import { randomBytes } from "crypto";

export class Event {

    constructor(index, player, name, description) {
        this.index = index;
        this.player = player;
        this.name = name;
        this.description = description;

    }

    static rollForEvent(player) {
        //insert code to get index of event to be returned.
        //for example, if random.10 === 1, return index 1
        // if random.5 == 2 and player.age > 30 return index 2 etc
        return 0;
    }    
    

    static createEvent(index, player) {
        let name;
        let description;
        let newEvent;
        switch (true) {
            case (index <= 3):
                name = "Find Side Hustle";
                description = "You find a side hustle and make an extra $5,000";
                newEvent = new Event(index, player, name, description);
                player.bank += 5000;
                return newEvent;
            case (index == 4):
                name = "Natural Disaster";
                description = "Your home is hit by a combination of hurricane, tornado, fire, and earthquake. If you're not insured, you lose your home, your car, and $30,000. If insured, you lose $10,000."
                player.inventory.includes("Insurance") ? player.bank -= 10000 : (player.removeInventory("House"), player.removeInventory("Car"), player.bank -= 30000);
                return newEvent;
            case (index <= 6):
                name = "Leadership Opportunity";
                description = "An opportunity has presented itself at work to lead a group of people to accomplish your company's long-term goal."
                if (player.attributes.includes("Organization")) {
                    description += " You accomplish the projects because of your organization skills and receive a permanent raise of $10,0000 each year.";
                    player.salary += 10000;
                } else if (player.attributes.includes("Charisma")) {
                    description += " You manage to explain to your boss the solution, but don't really don't have the organizational skills to fully accomplish the task. You recieve a $10,000 one-time bonus.";
                    player.bank += 10000;
                } else {
                    if (Math.random() > .5) {
                        description += " By shear luck, the results were produced that your boss loved. You get a one-time bonus of $5,000.";
                        player.bank += 5000;
                    } else {
                        description += " Your lack the charisma and organizational skills to lead the group and are demoted from project lead.";
                    }
                }
                newEvent = new Event(index, player, name, description);                
                return newEvent;
            case 3:
                newEvent = new Event(index, player, name, description);                
                return newEvent;
            case 4:
                newEvent = new Event(index, player, name, description);                
                return newEvent;
            case 5:
                newEvent = new Event(index, player, name, description);                
                return newEvent;
            case 6:
                newEvent = new Event(index, player, name, description);
                return newEvent;
            default:

        }
    }
}

