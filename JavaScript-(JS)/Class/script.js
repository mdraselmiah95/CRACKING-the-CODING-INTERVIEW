// Class

class Car {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }
  startEngine() {
    console.log("This is start engine method");
  }
}

// child class
class Bike extends Car {
  constructor(color, model, engineCapacity) {
    super(color, model);
    this.engineCapacity = engineCapacity;
  }

  bikeMethod() {
    console.log("This is Method of Bike class");
  }
}

const newBike = new Bike("Green", 2019);
console.log({ Bike });

const car = new Car("Red", 2022);
console.log(car.startEngine);
