// oop and classes
// example 1 inheritance
// class Animal {
//     eat() {
//         console.log("Animal is eating");
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log("Dog is barking");
//     }
// }

// let d = new Dog();
// d.eat();  // ✅ Inherited from Animal
// d.bark(); // ✅ Dog's own method

// example 2 inheritance

// class Vehicle {
//     start() {
//         console.log("Vehicle has started");
//     }
// }

// class Car extends Vehicle {
//     drive() {
//         console.log("Car is driving");
//     }
// }

// let c = new Car();
// c.start(); // ✅ from Vehicle
// c.drive(); // ✅ from Car


// // super usage call parent construtor
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name); // ✅ calls parent constructor
//         this.breed = breed;
//     }

//     info() {
//         console.log(`${this.name} is a ${this.breed}`);
//     }
// }

// let dog1 = new Dog("Buddy", "Labrador");
// dog1.info(); // Buddy is a Labrador


// //call parent method

// class Animal {
//     wavy() {
//         console.log("kar ni to wavy");
//     }

// }
// class elephent extends Animal {
//     hi() {
//         console.log("i am elephant");
//         super.wavy();
//     }

// }
// let a = new elephent;
// a.hi();


// // encapsulation private data hiding using #
// class BankAccount {
//     #balance = 0;

//     deposit(amount) {
//         this.#balance += amount;
//     }

//     getBalance() {
//         return this.#balance;
//     }
// }

// let acc = new BankAccount();
// acc.deposit(1000);
// console.log(acc.getBalance()); // 1000
// // console.log(acc.#balance); // ❌ Error (private)

// // example 2

// class User {
//     #password;

//     constructor(name, password) {
//         this.name = name;
//         this.#password = password;
//     }

//     checkPassword(pass) {
//         return pass === this.#password;
//     }
// }

// let u1 = new User("Ali", "1234");
// console.log(u1.checkPassword("1234")); // true
// console.log(u1.#password); // ❌ Error (can't access private)



// // Method Overriding(Child replaces parent method)
//  class Animal {
//     makeSound() {
//         console.log("Some generic animal sound");
//     }
// }

// class Dog extends Animal {
//     makeSound() {
//         console.log("Dog barks");
//     }
// }

// let d = new Dog();
// d.makeSound(); // Dog barks
// [7 / 13 / 2025 5: 24 PM] Haroon Nawaz Roommate: class Vehicle {
//     move() {
//         console.log("Vehicle is moving");
//     }
// }

// class Bike extends Vehicle {
//     move() {
//         console.log("Bike is racing fast!");
//     }
// }

// let b = new Bike();
// b.move(); // Bike is racing fast!
