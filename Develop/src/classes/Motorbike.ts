// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

//The Motorbike class extends the Vehicle class
class Motorbike extends Vehicle {
  //Declare properties of the Motorbike class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  //constructor for the Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    //Calls the constructor of the Vehicle class
    super();

    // Initialize the properties of the Motorbike class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

    // Check if the wheels array has 2 elements 
    // If not create 2 new default Wheel objects
    // Otherwise, use the provided wheels array
    if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }
  //Here is the wheelie method!
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`)
  }

  //Override the printDetails method from the Vehicle class
  override printDetails(): void {
    //call the printDetails method of the Vehicle class
    super.printDetails();

    // This logs the details of the Motorbike
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`);
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`);

  }
}

// Export the Motorbike class as the default export
export default Motorbike;
