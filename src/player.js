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
        this.salary += raiseMultiplier * this.salary;
    }

    addAge(years) {
        (years == null) ? this.age += 1 : this.age += years;
        if (!(this.inventory.includes("Spouse")) && this.age >= 26) {
            this.inventory.push("Spouse");
        }
        if (this.inventory.includes("Spouse") && this.age < 40) {
            let odds = Math.random();
            if (odds < .05) {
                this.inventory.push("Child");
            }
        }
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
            this.bank -= this.salary * .25;
        } else if (this.salary > 90000) {
            this.bank -= this.salary * .18;
        } else {
            this.bank -= this.salary * .10;
        }        
    }
}

export class Doctor extends Player {
    constructor(name) {
        super(name);
        this.profession = "Doctor";
        this.age = 28;
        this.bank = -200000;
        this.salary = Math.floor(Math.random(6,10)) * 10000;
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
        this.salary = Math.floor(Math.random(3,6)) * 10000;
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
        this.salary = Math.floor(Math.random(2,4)) * 10000;
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
        this.salary = Math.floor(Math.random(2,7)) * 10000;
        this.attributes = ["Charisma", "Creativity"];
        this.inventory = ["Spouse"];
    }
}