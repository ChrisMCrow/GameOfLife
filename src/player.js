export class Player {
    constructor(name) {
        this.name = name;
        this.mortgage = 0;
        this.autoLoan = 0;
    }

    getPaid() {
        this.bank += this.salary;
    }

    getRaise(raiseMultiplier) {
        this.salary *= raiseMultiplier;
    }

    addAge(years) {
        (years == null) ? years = Math.ceil(Math.random() * 3) : years;
        this.age += years;
        return years;
    }

    costOfLiving() {
        const rentPayment = this.salary * .25;
        const mortgagePayment = this.salary * .35;
        const autoPayment = this.salary * .1;
        const insurancePayment = this.age * 600;        

        //Transportation costs of the player
        if (this.inventory.includes("Car") && this.autoLoan > 0) {
            this.bank -= autoPayment;
            this.bank -= 1500;
        } else if ((this.inventory.includes("Car"))) {
            this.bank -= 1500;
        } else {
            this.bank -= 1000;
        }
        //Housing costs of the player
        if (this.inventory.includes("House") && this.mortgage > 0) {
            this.bank -= mortgagePayment;
            this.bank -= 3000;
        } else if ((this.inventory.includes("House"))) {
            this.bank -= 3000;
        } else {
            this.bank -= rentPayment;
        }

        //Insurance costs of the player
        if (this.inventory.includes("Insurance")) {
            this.bank -= insurancePayment;
        }

        //Tax costs of the player
        if (this.salary > 160000) {
            this.bank -= this.salary * .20;
        } else if (this.salary > 90000) {
            this.bank -= this.salary * .15;
        } else {
            this.bank -= this.salary * .10;
        }        
    }

    static getAllPlayerStats() {
        let playerArr = [];
        let newDoctor = new Doctor("Sample");
        playerArr.push(newDoctor);
        let newTeacher = new Teacher("Sample");
        playerArr.push(newTeacher);
        let newPolitician = new Politician("Sample");
        playerArr.push(newPolitician);
        let newArtist = new Artist("Sample");
        playerArr.push(newArtist);
        return playerArr;                        
    }

    addInventory(itemArray) {
        for (let i = 0; i < itemArray.length; i++) {
            this.inventory.push(itemArray[i]);
        }
    }

    removeInventory(item) {
        for (let i = this.inventory.length - 1; i >= 0; i--) {
            if (this.inventory[i] == item) {
                this.inventory.splice(i, 1);
            }
        }
    }

    addAttribute(attributeArray) {
        for (let i = 0; i < attributeArray.length; i++) {
            // if (!(this.attributes.contains(attributeArray[i]))) {
                this.attributes.push(attributeArray[i]);
            // }
        }
    }

    removeAttribute(item) {
        for (let i = 0; i < this.attributes.length; i++) {
            if (this.attributes[i] == item) {
                this.attributes.splice(i, 1);
            }
        }
    }
}

export class Doctor extends Player {
    constructor(name) {
        super(name);
        this.profession = "Doctor";
        this.age = 28;
        this.bank = -200000;
        this.salary = (Math.floor(Math.random() * 5) + 6) * 10000;
        this.attributes = ["Knowledge", "Organization"];
        this.inventory = ["Car", "Insurance"];
    }
}

export class Teacher extends Player {
    constructor(name) {
        super(name);        
        this.profession = "Teacher";
        this.age = 22;
        this.bank = -100000;
        this.salary = (Math.floor(Math.random() * 4) + 3) * 10000;
        this.attributes = ["Knowledge", "Creativity"];
        this.inventory = ["Car"];
    }
}

export class Politician extends Player {
    constructor(name) {
        super(name);        
        this.profession = "Politician";
        this.age = 18;
        this.bank = 0;
        this.salary = (Math.floor(Math.random() * 3) + 2) * 10000;
        this.attributes = ["Charisma", "Organization"];
        this.inventory = ["House"];
    }
}

export class Artist extends Player {
    constructor(name) {
        super(name);        
        this.profession = "Artist";
        this.age = 18;
        this.bank = 0;
        this.salary = (Math.floor(Math.random() * 6) + 2) * 10000;
        this.attributes = ["Charisma", "Creativity"];
        this.inventory = ["Spouse"];
    }
}