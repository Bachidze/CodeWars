//Task 1
class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    console.log(`Name:${this.name} Age:${this.age}`);
  }
}

class Developer extends Employee {
  constructor(name, age, Language) {
    super(name, age);
    this.Language = Language;
  }

  getProgrammingLanguages() {
    console.log(`${this.Language}`);
  }
}

class Marketer extends Employee {
  constructor(name, age, skill) {
    super(name, age);
    this.skill = skill;
  }

  displaySkills() {
    console.log(`${this.skill}`);
  }
}

const GiorgiProgrammer = new Developer("Girogi", 20, "C#");
GiorgiProgrammer.getInfo();
GiorgiProgrammer.getProgrammingLanguages();

const LevaniMarketer = new Marketer("Levani", 27, [
  "Creativity",
  "Communication Skills",
]);

LevaniMarketer.getInfo();
LevaniMarketer.displaySkills();

class CarFactory {
  constructor() {
    this.cars = [];
  }

  addCar(car) {
    this.cars.push(car);
  }

  deleteCar(carId) {
    this.cars = this.cars.filter((car) => car.id !== carId);
  }

  updateCar(carId, updatedCar) {
    const index = this.cars.findIndex((car) => car.id === carId);
    if (index !== -1) {
      this.cars[index] = { ...this.cars[index], ...updatedCar };
    }
  }

  getAllCars() {
    return this.cars;
  }
}

const carFactory = new CarFactory();

carFactory.addCar({ id: 1, make: "BMW", model: "DutiPitsti 2.8 Gatrinlebuli" });
carFactory.addCar({ id: 2, make: "Mercedes-Benz", model: "E400" });
carFactory.addCar({ id: 3, make: "Honda", model: "Civic" });

console.log("All Cars:", carFactory.getAllCars());

carFactory.updateCar(2, { make: "Ford", model: "Mustang" });

console.log("All Cars after update:", carFactory.getAllCars());

carFactory.deleteCar(1);

console.log("All Cars after deletion:", carFactory.getAllCars());
