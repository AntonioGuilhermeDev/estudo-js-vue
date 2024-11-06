function person(name, surname){
    this.name = name
    this.surname = surname

    this.getFullName = function(){
        return this.name + ' ' + this.surname
    };
}

const individual = new person("Antonio", "Guilherme");
console.log(individual.getFullName());

function car(brand, model){
    this.brand = brand;
    this.model = model;

    this.getDetails = function(){
        return this.brand + ' ' + this.model;
    }
};

const car1 = new car("Fiat", "Uno");
console.log(car1.getDetails());

class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    getArea(){
        return this.height * this.width;
    }
}

const rect = new Rectangle(400, 200);
console.log(rect.getArea());

const counter = {
    count: 0,
    increment() {
        setTimeout(() => {
            this.count = this.count + 1;
            console.log(this.count);
        }, 1000)
    }
};

counter.increment();


const user = {
    name: "Alice",
    sayHello() {
        console.log('Oi, meu nome é' + this.name);
    },
    sayHelloArrow: () => {
        console.log('Oi, meu nome é' + this.name);
    }
}

user.sayHello();
user.sayHelloArrow();
