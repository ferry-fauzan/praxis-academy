class Cat {
    constructor(tired, hunger, lonely, happy) {
        this.tired = tired;
        this.hunger = hunger;
        this.lonely = lonely;
        this.happy = happy;
    }

    status(value) {
        return `My Point right now: <br>Tired: ${this.tired} <br>Hunger: ${this.hunger} <br>Loneliness: ${this.lonely} <br>Happy: ${this.happy}`
    }
    feed(value) {
        this.hunger -= value;
        this.happy += value;
        return `<br> Yap thankss im feeding <br> My Point right now: <br>Tired: ${this.tired} <br>Hunger: ${this.hunger} <br>Loneliness: ${this.lonely} <br>Happy: ${this.happy}`
    }
    sleep(value) {
        this.tired -= value;
        this.happy += value;
        return `<br> Woow tonigh was a good dream <br> My Point right now: <br>Tired: ${this.tired} <br>Hunger: ${this.hunger} <br>Loneliness: ${this.lonely} <br>Happy: ${this.happy}`
    }
    pet(value) {
        this.lonely -= value;
        this.happy += value;
        return `<br> Im very very happy and gratefull to you <br> My Point right now: <br>Tired: ${this.tired} <br>Hunger: ${this.hunger} <br>Loneliness: ${this.lonely} <br>Happy: ${this.happy}`
    }
}

let cat = new Cat(50, 50, 50, 50);
// document.write(cat.status())
document.write(cat.pet(30))