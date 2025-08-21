'use strict';

///////////////////////////////////////
// Constructor Functions and the new Operator

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never to this!
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);

// console.log(jonas instanceof Person);

// Person.hey = function () {
//   console.log('Hey there 👋');
//   console.log(this);
// };
// Person.hey();
// //////////////////////////////////
// // Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// // .prototyeOfLinkedObjects

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));
// console.log(`\n`);
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


// console.log(`Rojabbyy`);
// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed; // km/h
//   }

//   // Method accelerate
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   // Method brake
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   // Getter: konversi km/h -> mi/h
//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   // Setter: input dalam mi/h -> simpan ke km/h
//   set speedUS(speedMph) {
//     this.speed = speedMph * 1.6;
//   }
// }

// // Buat object
// const car1 = new Car("Ford", 120);

// // Testing
// car1.accelerate();  // Ford is going at 130 km/h
// car1.brake();       // Ford is going at 125 km/h

// console.log(car1.speedUS); // Getter → ~78.125 mph

// car1.speedUS = 50;  // Setter → ubah jadi 50 mph (disimpan sebagai 80 km/h)
// console.log(car1);  // Ford { make: 'Ford', speed: 80 }

// // by udemy

// console.log(`\n`);

// console.log(`By Udemy `);
// class CarCl {
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

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);

///// inhertit beetwen classes


// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

//////////////////////////////////////

//CHalange 3

// Parent constructor function
// const Car = function(make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function() {
//   this.speed += 10;
//   console.log(`${this.make} going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function() {
//   this.speed -= 5;
//   console.log(`${this.make} going at ${this.speed} km/h`);
// };

// // Child constructor function
// const EV = function(make, speed, charge) {
//   Car.call(this, make, speed); // panggil constructor Car
//   this.charge = charge;        // tambahan property untuk EV
// };

// // Inherit prototype dari Car
// EV.prototype = Object.create(Car.prototype);

// // Method charger
// EV.prototype.chargeBattery = function(chargeTo) {
//   this.charge = chargeTo;
// };

// // Override method accelerate
// EV.prototype.accelerate = function() {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
//   );
// };

// // create object tesla
// const tesla = new EV('Tesla', 120, 23);

// tesla.accelerate();    
// tesla.brake();         
// tesla.chargeBattery(90);
// console.log(tesla);    


// // byy Uemu
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

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// // Link the prototypes
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();

// Inheritance Between "Classes": ES6 Classes

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

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
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first!
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();

// // Inheritance Between "Classes": Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   // BUG in video:
//   // console.log(`My name is ${this.fullName} and I study ${this.course}`);
  
//   // FIX:
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();


// // Encapsulation: Protected Properties and Methods
// // Encapsulation: Private Class Fields and Methods

// // 1) Public fields
// // 2) Private fields
// // 3) Public methods
// // 4) Private methods
// // (there is also the static version)

// class Account {
//   // 1) Public fields (instances)
//   locale = navigator.language;

//   // 2) Private fields (instances)
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;

//     // Protected property
//     // this._movements = [];
//     // this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   // 3) Public methods

//   // Public interface
//   getMovements() {
//     return this.#movements;
//   }

//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }

//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestLoan(val) {
//     // if (this.#approveLoan(val)) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//       return this;
//     }
//   }

//   static helper() {
//     console.log('Helper');
//   }

//   // 4) Private methods
//   // #approveLoan(val) {
//   _approveLoan(val) {
//     return true;
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);

// // acc1._movements.push(250);
// // acc1._movements.push(-140);
// // acc1.approveLoan(1000);

// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// console.log(acc1.getMovements());
// console.log(acc1);
// Account.helper();

// // console.log(acc1.#movements);
// // console.log(acc1.#pin);
// // console.log(acc1.#approveLoan(100));

// // Chaining
// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
// console.log(acc1.getMovements());


// CHALANGE 4

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
    return this; 
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
    return this; 
  }
}

class EVCl extends CarCl {
  #charge; // private field

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this; 
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`
    );
    return this; 
  }
}

// 🔥 Testing
const rivian = new EVCl('Rivian', 120, 23);

rivian
  .accelerate()      
  .brake()           
  .accelerate()      
  .accelerate();     
