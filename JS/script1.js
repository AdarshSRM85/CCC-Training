/*
car 
   make
   speed

evcar
    charge

carOBJ : alto  - > speed
    accele - > 
        speed  +10kmph
        charge -5%

    brake
        speed -5km/h
*/


class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
  }

  brake() {
    this.speed = this.speed - 5;
  }
}

class EV extends Car {
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }
  accelerate() {
    this.speed += 10;
    this.charge = this.charge - 5;
    return this;
  }
}

let alto = new EV("suzuki", 100, 40);
console.log(alto);
alto.accelerate().accelerate().accelerate();
// alto.brake();
console.log(alto);


