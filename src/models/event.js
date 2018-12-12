import { Player, Doctor, Teacher, Politician, Artist } from "./player";
import { randomBytes } from "crypto";
import { Game } from "./game";

export class Event {

    constructor(index, player, name, description) {
        this.index = index;
        this.player = player;
        this.name = name;
        this.description = description;

    }

    static rollForEvent(player) {
        if (!(player.inventory.includes("Spouse")) && player.age >= 26) {
            if (Math.random() < .25) {
                return 0;
            }
        }
        if (player.inventory.includes("Spouse") && player.age < 40) {
            if (Math.random() < .1) {
                return 1;
            } else if (Math.random() > .95) {
                return 2;
            }
        }
        if (!(player.inventory.includes("House")) && player.bank > 0) {
            if (Math.random() < .2) {
                return 3;
            }
        }
        if (!(player.inventory.includes("Car"))) {
            if (Math.random() < .2) {
                return 4;
            }
        }
        if (!(player.inventory.includes("Insurance"))) {
            if (Math.random() < .2) {
                return 5;
            }
        }
        let category = Math.floor(Math.random() * 3)
        if (category == 0) {
            let roll = Math.floor((Math.random() * 16) + 16);
            return roll;
        } else if (category == 1) {
            let roll = Math.floor((Math.random() * 16) + 32);
            return roll;
        } else if (category == 2) {
            let roll = Math.floor((Math.random() * 16) + 48);
            return roll;
        }
    }
    

    static createEvent(index, player) {
        let name;
        let description;
        let newEvent;
        switch (true) {
            //Inventory Modifiers - Additions
            case (index === 0):
                name = "Partner for a Lifetime";
                description = "You have finally met the person of your dreams and have decided to tie the knot. Your spouse has been added to your inventory. While having a spouse, your salary is increase by 50%.";
                player.addInventory(["Spouse"]);
                player.salary *= 1.5;
                newEvent = new Event(index, player, name, description);                
                return newEvent;
            
            case (index === 1):
                name = "Little Bundle of Joy";
                description = "You have added a new member to the family! Your child gives you a net earning of 20% in added hardwork and taxbreaks."
                player.addInventory(["Child"]);
                player.salary *= 1.2;
                newEvent = new Event(index, player, name, description);
                return newEvent;

            case (index === 2):
                name = "Double the Trouble";
                description = "You have added twins to the family! Each child gives you a net earning of 20% in added hardwork and taxbreaks. It costs you $20,000 in lost income to raise them during their first year of life."
                player.addInventory(["Child", "Child"]);
                player.salary *= 1.4;
                newEvent = new Event(index, player, name, description);
                return newEvent;

            case (index === 3):
                name = "Buy a House";
                description = `You've taken the plunge and bought a house! While your mortgage is a bit higher than your rent, you'll have your mortgage payments completed by the time you're ${player.age + player.mortgage + 15}! Your downpayment is ${player.salary}`;
                player.addInventory(["House"]);
                player.mortgage += 15;
                player.bank -= player.salary;
                newEvent = new Event(index, player, name, description);                
                return newEvent;                

            case (index === 4):
                name = "Buy a Car";
                description = `You've decided to buy a new car. Your annual payment will be $${player.salary * .1} per year and you'll have your car payments completed by the time you're ${player.age + player.autoLoan + 5}.`;
                player.addInventory(["Car"]);
                player.autoLoan += 5;
                newEvent = new Event(index, player, name, description);                
                return newEvent;

            case (index === 5):
                name = "Being Prepared";
                description = `You have wised up from your previous years and have purchased insurance for your whole life. It will cost $${600 * player.age} and will go up by $600 per year.`;
                player.addInventory(["Insurance"]);
                newEvent = new Event(index, player, name, description);                
                return newEvent;
                
                

            //Inventory Modifiers - Removals
            case (index === 9):
                name = "The Call You Never Want to Get";
                description = `Your spouse has been killed in an automobile accident. You're devestated and it has hit your finances hard. You lose their $${player.salary * .5} salary and pay $25,000 in funeral expenses.`;
                player.removeInventory("Spouse");
                player.salary -= player.salary * .5;
                player.bank -= 25000;
                newEvent = new Event(index, player, name, description);                
                return newEvent;                

            case (index === 10):
                name = "Empty Nest";
                description = `Your children have all moved out of the house and you're living the good life. Except for the loss of 25% in tax breaks.`;
                player.removeInventory("Child");
                player.salary *= .75;
                newEvent = new Event(index, player, name, description);                
                return newEvent;                

            case (index === 11):
                name = "Sell the House";
                description = `There is a time in everyone's life where they decide to downsize. Today is that day. You sell your house and collect $${(player.salary * 6) - (player.mortgage * player.salary * .35)}! Bank to renting your living space.`;
                player.removeInventory(["House"]);
                player.bank += (player.salary * 6) - (player.mortgage * player.salary * .35);
                player.mortgage = 0;
                newEvent = new Event(index, player, name, description);                
                return newEvent;                

            case (index === 12):
                name = "Fixing Traffic";
                description = `All of the traffic congestion finally has reached a breaking point. You decide not to be part of the problem and sell your car. You collect $${player.salary * .1 * player.autoLoan} but will have to start using public transportation in the future..`;
                player.removeInventory(["Car"]);
                player.bank += player.salary * .1 * player.autoLoan;
                player.autoLoan = 0;
                newEvent = new Event(index, player, name, description);                
                return newEvent;

            case (index === 13):
                name = "Taking Your Chances";
                description = "With the rising costs of healthcare, insurance is just too big of a commitment. You decide to take your chances and hault your insurance. You no longer have the coverage of peace of mind (and the payment).";
                player.removeInventory(["Insurance"]);
                newEvent = new Event(index, player, name, description);                
                return newEvent;                


            //Attribute Mofifiers
            //gain
            case (index === 16):
                name = "Hitting the Books";
                description = "You decide to increase your knowledge in life by learning a new skill. Hours and hours are spent at the library and a difference is definately made. You gain the attribute 'Knowledge'";
                player.addAttribute(["Knowledge"]);
                newEvent = new Event(index, player, name, description);                
                return newEvent;
                
            case (index === 17):
                name = "More Talk, Less Action";
                description = "All of the work that you do talking and complaining about your issues have finally paid off. You have convinced your friends that you are right and have the ear of everyone you know. You gain the attribute 'Charisma'";
                player.addAttribute(["Charisma"]);
                newEvent = new Event(index, player, name, description);                
                return newEvent;     

            case (index === 18):
                name = "Losing Your Touch";
                description = "Your are best problem solver you know. You zig when life expects you to zag and you zag when life expects to you zig. You gain the attribute 'Creativity'";
                player.addAttribute(["Creativity"]);
                newEvent = new Event(index, player, name, description);                
                return newEvent;     

            case (index === 19):
                name = "Organized Life";
                description = "You watch the Netflix documentary, 'The Minimalists' and become inspired to downsize and be more intentional with your life. You gain the attribute 'Organization'";
                player.addAttribute(["Organization"]);
                newEvent = new Event(index, player, name, description);                
                return newEvent;
            //lose  
            case (index === 20):
                name = "Couch Potato";
                description = "All the knowledge you have gained in your life has gone to waste. You decide to forget it all. You lose the attribute 'Knowledge'";
                player.removeAttribute(["Knowledge"]);
                newEvent = new Event(index, player, name, description);                
                return newEvent;
                
            case (index === 21):
                name = "Failed on Stage";
                description = "You were once the one everybody listened to; the one your friends used to call. You have a new friend in life, he is more charismatic than you are. You lose the attribute 'Charisma'";
                player.removeAttribute(["Charisma"]);
                newEvent = new Event(index, player, name, description);                
                return newEvent;     

            case (index === 22):
                name = "Writer's Block";
                description = "A few months ago you decided to write a book. Today, you are only 3 words in and feel lost in life. You lose the attribute 'Creativity'";
                player.removeAttribute(["Creativity"]);
                newEvent = new Event(index, player, name, description);                
                return newEvent;     

            case (index === 23):
                name = "Hoarding";
                description = "The show 'Hoarders' really grabs your attention. After binge watching a few seasons, you make changes to your life to be like the stars in the show. You lose the attribute 'Organization'";
                player.removeAttribute(["Organization"]);
                newEvent = new Event(index, player, name, description);                
                return newEvent;
                
            //Opportunities
            case (index === 32):
                name = "Aunt Tilda's Will";
                description = "Your great aunt Tilda has died, leaving you a small fortune of $100,000. Thank you Aunt Tilda!!!";
                player.bank += 100000;
                newEvent = new Event(index, player, name, description);
                return newEvent;

            case (index === 33):
                name = "Find Side Hustle";
                description = "You find a side hustle and make an extra $5,000";
                player.bank += 5000;
                newEvent = new Event(index, player, name, description);
                return newEvent;

            case (index === 34):
                name = "Leadership Opportunity";
                description = "An opportunity has presented itself at work to lead a group of people to accomplish your company's long-term goal.";
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

            case (index === 35):
                name = "Party Planning";
                description = "Your friend announces their engagement for their wedding and wants 'YOU' to plan their wedding";
                if (player.attributes.includes("Creativity")) {
                    description += " You throw the best wedding in the history of the world utilizing your CREATIVITY. After the event, your friend gives you the remaining balance of money from the coffers, $20,000.";
                    player.bank += 20000;
                } else if (player.attributes.includes("Knowledge")) {
                    description += " You use your superior KNOWLEDGE to create a budget using the formulas and systems you learned in school. You manaage to save your friends some money on the wedding, and they split the savings with you. You recieve a $7,000 gift for your services.";
                    player.bank += 7000;
                } else {
                    if (Math.random() > .5) {
                        description += " You're a good person and help out your friends and you get a few gifts from the wedding party that total to $3,000.";
                        player.bank += 3000;
                    } else {
                        description += " Your lack the knowledge and creativity skills have you decline the offer for you plan your friends wedding. At least you still get the cake.";
                    }
                }
                newEvent = new Event(index, player, name, description);                
                return newEvent;    
                
            case (index === 36):
                name = "Start Your Own Business";
                description = "An old coworker approaches you with a business plan that you consider taking part in.";
                if (player.attributes.includes("Charisma")) {
                    description += " Good thing the business is sales. You use your CHARISMA to get a residual income to your salary of $10,000 per year";
                    player.salary += 10000;
                } else if (player.attributes.includes("Creativity")) {
                    description += " Your CREATIVITY gave you access to get a pretty decent business. You have setup a permanent income stream of $3,000 per year.";
                    player.salary += 3000;
                } else {
                    if (Math.random() > .5) {
                        description += " Just by putting in many hours into the business you manage to scrape by with a profit of $3,000, but you decide that it is not something you want to keep on doing.";
                        player.bank += 3000;
                    } else {
                        description += " Your lack the charisma and creativity skills has you just say 'No' to your coworker. You don't want to risk it.";
                    }
                }
                newEvent = new Event(index, player, name, description);                
                return newEvent;   
                
            case (index === 37):
                name = "Teaching Gig";
                description = "A local community college is offering a good amount of money for a night school instructor in your field.";
                if (player.attributes.includes("Knowledge")) {
                    description += " Your KNOWLEDGE of the subject makes you a prime cantidate and you get the job for an additional $10,000 per year";
                    player.salary += 10000;
                } else if (player.attributes.includes("Organization")) {
                    description += " Your lack of KNOWLEDGE won't keep you on long term, but because of your excellent ORGANIZATION they give you a one year contract for $10,000.";
                    player.bank += 10000;
                } else {
                    if (Math.random() > .5) {
                        description += " Although you lack KNOWLEDGE and ORGANIZATION, your hardwork lands you a job as a sub for a year with a $4,000 salary.";
                        player.bank += 4000;
                    } else {
                        description += " Unfortunately, your lack of KNOWLEDGE and ORGANIZATION make you unqualified for this position. Oh well, at least you keep your evenings.";
                    }
                }
                newEvent = new Event(index, player, name, description);                
                return newEvent;   

            //Hardships
            case (index == 48):
                name = "Can Anybody Find Me Somebody to Love";
                description = "Life has hit you hard and you're having a crisis of self."
                if (player.inventory.includes("Spouse")) {
                    description += " Fortunately your SPOUSE has been a rock and helped you get through it. You guys both get away on a $5000 trip around the world and you come back better than ever.";
                    player.bank -= 5000;
                } else {
                    description += ` Because of your extreme loneliness and lack of SPOUSE, your spiral into a dark place and spend an entire year on blow and whores, costing you $${player.salary}.`
                    player.bank -= player.salary;
                }
                newEvent = new Event(index, player, name, description);                
                return newEvent;

            case (index == 49):
                name = "Natural Disaster";
                description = "Your home is hit by a combination of hurricane, tornado, fire, and earthquake. If you're not insured, you lose your home, your car, and $30,000. If insured, you lose $10,000.";
                player.inventory.includes("Insurance") ? player.bank -= 10000 : (player.removeInventory("House"), player.removeInventory("Car"), player.bank -= 30000);
                newEvent = new Event(index, player, name, description);                
                return newEvent;

            case (index == 50):
                name = "Cookies that are NOT Free";
                description = "Today you hear a knock on the door. It is a ravenous pack of girlscouts."
                if (player.inventory.includes("Child")) {
                    description += " You offer your CHILD to the pack of girlscouts and only have to pay for the trip that your kid wants to go on, rather than $10,000 on the cookies themselves. You shell out $4,000 for the trip.";
                    player.bank -= 4000;
                } else {
                    description += " They pull on your heartstrings and you have no choice but to send them all to girlscout camp. You spend $10,000 on cookies, wishing you had a CHILD of your own. You want to be happy with the cookies, but they wont last the rest of the month.";
                    player.bank -= 10000;
                }
                newEvent = new Event(index, player, name, description);                
                return newEvent;

            case (index == 51):
                name = "An Arm and a Leg in Rent";
                description = "Your city is becoming a booming technology hub. All of the new residents are driving rent prices up astronomically."
                if (player.inventory.includes("House")) {
                    description += " One of those new residents is unfortunately your brother-in-law Jeremy who can't find a place of his own and has to move in with you, costing you easily $4000 a year in happiness.";
                    player.salary -= 4000;
                } else {
                    description += " You end up with a net loss of $10,000 a year in higher rent costs.";
                    player.salary -= 10000;
                }
                newEvent = new Event(index, player, name, description);                
                return newEvent;

            case (index == 52):
                name = "An Uber Hardship";
                description = "You get into a situation where you owe your friend a lot of money. Your friend compromises and allows you to be his personal chauffeur."
                if (player.inventory.includes("Car")) {
                    description += " You drive, drive, and drive around your friend around for a year, racking up maintenance costs on your car. Fortuneately you Uber on the side to offset some of the costs, but you still lose $8,000.";
                    player.bank -= 8000;
                } else {
                    description += " Since you dont have a CAR, you payback your friend in the full $25,000.";
                    player.bank -= 25000;
                }
                newEvent = new Event(index, player, name, description);                
                return newEvent;
            
            default:
                return false;

        }
    }
}

