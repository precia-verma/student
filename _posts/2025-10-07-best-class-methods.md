---
layout: base
toc: True
breadcrumb: True
title: CSSE Classes and Methods HW 
description: These are the homework problems and popcorn hacks.
permalink: /class-methods
author: Precia Verma
categories: [Homework]
---

# CSSE Classes and Methods Homework

## Table of Contents
1. [Popcorn Hack 1 - Dice Roller](#popcorn-hack-1)
2. [Popcorn Hack 2 - Pet Simulator](#popcorn-hack-2)
3. [Homework Problems](#homework-problems)
4. [Extra Credit](#extra-credit)

---

## Popcorn Hack 1 - Dice Roller

### Instructions:
Finish the code in the cell below (fill in underlines and add lines of code) so it works as described:

- Create a class called Dice that:
    - Has a property for the number of sides.
    - Has a method roll() that returns a random number between 1 and the number of sides.

At the bottom, test your game by making a DiceGame object and calling roll() a few times.

The code is currently NOT functional. When you have completed this popcorn hack, the code should work. Have fun!

```javascript
class Dice {
  constructor(sides) {
    this.sides = sides;
  }

  roll() {
    return Math.floor(Math.random() * this.sides) + 1;
  }
}

const dice = new Dice(6);

console.log("Rolling the dice 5 times:");
for (let i = 0; i < 5; i++) {
  console.log(`Roll ${i+1}: ${dice.roll()}`);
}
```

<script>
class Dice {
  constructor(sides) {
    this.sides = sides;
  }

  roll() {
    return Math.floor(Math.random() * this.sides) + 1;
  }
}

const dice = new Dice(6);
console.log("Rolling the dice 5 times:");
for (let i = 0; i < 5; i++) {
  console.log(`Roll ${i+1}: ${dice.roll()}`);
}
</script>

## Popcorn Hack 2 - Pet Simulator

### Instructions:
This hack is a bit more complicated than the first. Points will be awarded based on effort and completion.

Analyze the block of code below. Then, complete the following instructions:

1) Create a simple Pet class by filling in the _________.
2) Add at least 2 properties (like hunger, energy, or happiness). EX: Stats decrease over time.
3) Add at least two functioning methods (such as feed, play, or sleep) EX: Buttons increase stats.
4) Give your pet a name and print their current properties.
5) Bonus: Add a "status" method to print all your pet's stats.

The code is currently NOT functional. When you have completed this popcorn hack, the code should work. Have fun!

```javascript
class Pet {
  constructor(name) {
    this.name = name;
    this.hunger = 5;
    this.energy = 5;
    this.happiness = 5;
  }

  feed() {
    this.energy += 1;
    this.hunger -= 2;
    this.happiness += 1;
    console.log(`${this.name} has been fed!`);
  }

  play() {
    this.energy -= 1;
    this.hunger += 1;
    this.happiness += 2;
    console.log(`${this.name} has been played with!`);
  }
}

const myPet = new Pet("Buddy");
console.log(`Pet name: ${myPet.name}, Hunger: ${myPet.hunger}, Energy: ${myPet.energy}, Happiness: ${myPet.happiness}`);

myPet.feed();
myPet.play();
```

<script>
class Pet {
  constructor(name) {
    this.name = name;
    this.hunger = 5;
    this.energy = 5;
    this.happiness = 5;
  }

  feed() {
    this.energy += 1;
    this.hunger -= 2;
    this.happiness += 1;
    console.log(`${this.name} has been fed!`);
  }

  play() {
    this.energy -= 1;
    this.hunger += 1;
    this.happiness += 2;
    console.log(`${this.name} has been played with!`);
  }
}

const myPet = new Pet("Buddy");
console.log(`Pet name: ${myPet.name}, Hunger: ${myPet.hunger}, Energy: ${myPet.energy}, Happiness: ${myPet.happiness}`);

myPet.feed();
myPet.play();
</script>

## Homework Problems

Complete the following questions in the next code block.

1) Create a class Person with properties 'name' and 'age'. Print their properties.
2) Add a method greet() to your Person class that prints a greeting using the person's name.
3) Create a class Book with properties 'title', 'author', and 'pages'. Instantiate a book and print its properties.
4) Add a method read(pages) to your Book class that increments a pagesRead property and prints a message.
5) Add a method isLongBook() that returns true if pages > 300, otherwise false. Print the result for your book.
6) Create a class Car with properties 'make', 'model', and 'fuel'. Add methods drive(distance) and refuel(amount). Print messages in each method.
7) Add a static method info() to your Car class that prints 'Cars are vehicles.'
8) Create a class ElectricCar that extends Car. Add a property 'battery' and a method charge(amount) that increases battery. Print battery level after charging.
10) Create a routine that combines your objects: drive a Car, charge an ElectricCar, read pages from a Book, and call greet() on Person. Print outputs for each action.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

const person1 = new Person("Precia", 14);
console.log(`Person: Name = ${person1.name}, Age = ${person1.age}`);

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.pagesRead = 0;
  }

  read(pages) {
    this.pagesRead += pages;
    console.log(`You read ${pages} pages. Total pages read: ${this.pagesRead}`);
  }

  isLongBook() {
    return this.pages > 300;
  }
}

const book1 = new Book("Harry Potter", "J.K. Rowling", 350);
console.log(`Book: Title = ${book1.title}, Author = ${book1.author}, Pages = ${book1.pages}`);

class Car {
  constructor(make, model, fuel) {
    this.make = make;
    this.model = model;
    this.fuel = fuel;
  }

  drive(distance) {
    const fuelUsed = distance * 0.1;
    this.fuel -= fuelUsed;
    console.log(`Driving ${distance} miles. Fuel used: ${fuelUsed}. Remaining fuel: ${this.fuel}`);
  }

  refuel(amount) {
    this.fuel += amount;
    console.log(`Refueled ${amount} gallons. Current fuel: ${this.fuel}`);
  }

  static info() {
    console.log("Cars are vehicles.");
  }
}

class ElectricCar extends Car {
  constructor(make, model, fuel, battery) {
    super(make, model, fuel);
    this.battery = battery;
  }

  charge(amount) {
    this.battery += amount;
    console.log(`Charged ${amount}%. Current battery level: ${this.battery}%`);
  }
}

const car1 = new Car("Toyota", "Camry", 15);
console.log(`Car created: ${car1.make} ${car1.model} with ${car1.fuel} gallons of fuel`);

const electricCar1 = new ElectricCar("Tesla", "Model 3", 0, 80);
console.log(`Electric Car created: ${electricCar1.make} ${electricCar1.model} with ${electricCar1.battery}% battery`);

console.log("\n=== Combined Routine ===");

car1.drive(50);

electricCar1.charge(20);

book1.read(25);

console.log(`Is "${book1.title}" a long book? ${book1.isLongBook()}`);

person1.greet();

Car.info();

console.log("\n=== All homework completed! ===");
```

<script>
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

const person1 = new Person("Precia", 14);
console.log(`Person: Name = ${person1.name}, Age = ${person1.age}`);

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.pagesRead = 0;
  }

  read(pages) {
    this.pagesRead += pages;
    console.log(`You read ${pages} pages. Total pages read: ${this.pagesRead}`);
  }

  isLongBook() {
    return this.pages > 300;
  }
}

const book1 = new Book("Harry Potter", "J.K. Rowling", 350);
console.log(`Book: Title = ${book1.title}, Author = ${book1.author}, Pages = ${book1.pages}`);

class Car {
  constructor(make, model, fuel) {
    this.make = make;
    this.model = model;
    this.fuel = fuel;
  }

  drive(distance) {
    const fuelUsed = distance * 0.1;
    this.fuel -= fuelUsed;
    console.log(`Driving ${distance} miles. Fuel used: ${fuelUsed}. Remaining fuel: ${this.fuel}`);
  }

  refuel(amount) {
    this.fuel += amount;
    console.log(`Refueled ${amount} gallons. Current fuel: ${this.fuel}`);
  }

  static info() {
    console.log("Cars are vehicles.");
  }
}

class ElectricCar extends Car {
  constructor(make, model, fuel, battery) {
    super(make, model, fuel);
    this.battery = battery;
  }

  charge(amount) {
    this.battery += amount;
    console.log(`Charged ${amount}%. Current battery level: ${this.battery}%`);
  }
}

const car1 = new Car("Toyota", "Camry", 15);
console.log(`Car created: ${car1.make} ${car1.model} with ${car1.fuel} gallons of fuel`);

const electricCar1 = new ElectricCar("Tesla", "Model 3", 0, 80);
console.log(`Electric Car created: ${electricCar1.make} ${electricCar1.model} with ${electricCar1.battery}% battery`);

console.log("\n=== Combined Routine ===");

car1.drive(50);

electricCar1.charge(20);

book1.read(25);

console.log(`Is "${book1.title}" a long book? ${book1.isLongBook()}`);

person1.greet();

Car.info();

console.log("\n=== All homework completed! ===");
</script>

## Extra Credit

**Extra Credit:** Submit the original OOP Breakout Game Code (found on [OpenCS](https://github.com/Open-Coding-Society/pages/blob/main/hacks/breakout/breakout.md?plain=1)) after making the following edits:
- Add another feature to the game: Add a method so that the ball must collide with some bricks twice for a brick to break completely.
- Edit a method in the ball class to increase/decrease the speed of the ball: Please add a COMMENT on the game code that specifies which line you edited.

---

*This homework assignment covers JavaScript classes, methods, inheritance, and object-oriented programming concepts.*
