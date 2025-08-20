'use strict';

///////////////////////////////////////
// Constructor Functions and the new Operator

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this!
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(jonas instanceof Person);

Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};
Person.hey();
//////////////////////////////////
// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototyeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));
console.log(`\n`);
///////////////////////////////////////

// CHALANGE !

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }
// }

// const car1 = new Car("BMW", 120);
// const car2 = new Car("Mercedes", 95);

// car1.accelerate();
// car1.accelerate();
// car1.brake();
// car1.accelerate();

// car2.accelerate();
// car2.brake();
// car2.brake();

// By Udemy

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();

// ES6 Classes

// Class expression
// const PersonCl = class {}

// Class declaration
    // class PersonCl {
    //   constructor(fullName, birthYear) {
    //     this.fullName = fullName;
    //     this.birthYear = birthYear;
    //   }

    //   // Instance methods
    //   // Methods will be added to .prototype property
    //   calcAge() {
    //     console.log(2037 - this.birthYear);
    //   }

    //   greet() {
    //     console.log(`Hey ${this.fullName}`);
    //   }

    //   get age() {
    //     return 2037 - this.birthYear;
    //   }

    //   // Set a property that already exists
    //   set fullName(name) {
    //     if (name.includes(' ')) this._fullName = name;
    //     else alert(`${name} is not a full name!`);
    //   }

    //   get fullName() {
    //     return this._fullName;
    //   }

    //   // Static method
    //   static hey() {
    //     console.log('Hey there 👋');
    //     console.log(this);
    //   }
    // }

    // const jessica = new PersonCl('Jessica Davis', 1996);
    // console.log(jessica);
    // jessica.calcAge();
    // console.log(jessica.age);

    // console.log(jessica.__proto__ === PersonCl.prototype);

    // // PersonCl.prototype.greet = function () {
    // //   console.log(`Hey ${this.firstName}`);
    // // };
    // jessica.greet();

    // // 1. Classes are NOT hoisted
    // // 2. Classes are first-class citizens
    // // 3. Classes are executed in strict mode

    // const walter = new PersonCl('Walter White', 1965);
    // // PersonCl.hey();

    // // Setters and Getters
    // const account = {
    //   owner: 'Rojabby',
    //   movements: [200, 530, 120, 300],

    //   get latest() {
    //     return this.movements.slice(-1).pop();
    //   },

    //   set latest(mov) {
    //     this.movements.push(mov);
    //   },
    // };

    // console.log(account.latest);

    // account.latest = 50;
    // console.log(account.movements);

    // // Object.create

    // const PersonProto = {
    //   calcAge() {
    //     console.log(2037 - this.birthYear);
    //   },

    //   init(firstName, birthYear) {
    //     this.name = firstName;
    //     this.birthYear = birthYear;
    //   },
    // };

    // const steven = Object.create(PersonProto);
    // console.log(steven);
    // steven.name = 'Steven';
    // steven.birthYear = 2002;
    // steven.calcAge();

    // console.log(steven.__proto__ === PersonProto);

    // const sarah = Object.create(PersonProto);
    // sarah.init('Sarah', 1979);
    // sarah.calcAge();


// CHALANGE 2


console.log(`Rojabbyy`);
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed; // km/h
  }

  // Method accelerate
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  // Method brake
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  // Getter: konversi km/h -> mi/h
  get speedUS() {
    return this.speed / 1.6;
  }

  // Setter: input dalam mi/h -> simpan ke km/h
  set speedUS(speedMph) {
    this.speed = speedMph * 1.6;
  }
}

// Buat object
const car1 = new Car("Ford", 120);

// Testing
car1.accelerate();  // Ford is going at 130 km/h
car1.brake();       // Ford is going at 125 km/h

console.log(car1.speedUS); // Getter → ~78.125 mph

car1.speedUS = 50;  // Setter → ubah jadi 50 mph (disimpan sebagai 80 km/h)
console.log(car1);  // Ford { make: 'Ford', speed: 80 }

// by udemy

console.log(`\n`);

console.log(`By Udemy `);
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
