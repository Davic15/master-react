//* Classes
 class Car {
    constructor(model, speed, year) {
        this.model = model;
        this.speed = speed;
        this.year = year;
    }

    increaseSpeed() {
        this.speed += 1;
    }

    decreaseSpeed() {
        this.speed -= 1;
    }
}

class Bus extends Car {
    constructor(model, speed, year) {
        super(model, speed, year);
        this.height = 5;
    }
    displayHeight() {
        return 'It is: ' + this.height
    }
}

let bus1 = new Bus('Pegasus', 120, 2022);
console.log(bus1.displayHeight())

let car1 = new Car('BMW', 200, 2017);
let car2 = new Car('Audi', 200, 2017);
let car3 = new Car('Mercedes', 200, 2017);
let car4 = new Car('Ferrari', 200, 2017);

document.write('<h1>Speed</h1>' + car4.speed)
console.log(car4)
car4.increaseSpeed()
car4.increaseSpeed()
car4.increaseSpeed()
car4.increaseSpeed()
console.log(car4)
document.write('<h1>Speed</h1>' + car4.speed)