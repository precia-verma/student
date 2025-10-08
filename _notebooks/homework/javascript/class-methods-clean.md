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
    if (this.hunger > 0) {
      this.hunger--;
      this.happiness++;
      console.log(this.name + " was fed! Hunger decreased.");
    } else {
      console.log(this.name + " is not hungry right now!");
    }
  }

  play() {
    if (this.energy > 1) {
      this.energy = this.energy - 2;
      this.happiness = this.happiness + 2;
      this.hunger++;
      console.log(this.name + " played and had fun! Energy decreased, but happiness increased.");
    } else {
      console.log(this.name + " is too tired to play right now!");
    }
  }
  
  status() {
    console.log("---- " + this.name + "'s Status ----");
    console.log("Hunger: " + this.hunger + "/10");
    console.log("Energy: " + this.energy + "/10");
    console.log("Happiness: " + this.happiness + "/10");
  }
}

const myPet = new Pet("Fluffy");
console.log("Created a new pet named " + myPet.name);

myPet.status();

myPet.feed();
myPet.play();
myPet.status();
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
    if (this.hunger > 0) {
      this.hunger--;
      this.happiness++;
      console.log(this.name + " was fed! Hunger decreased.");
    } else {
      console.log(this.name + " is not hungry right now!");
    }
  }

  play() {
    if (this.energy > 1) {
      this.energy = this.energy - 2;
      this.happiness = this.happiness + 2;
      this.hunger++; 
      console.log(this.name + " played and had fun! Energy decreased, but happiness increased.");
    } else {
      console.log(this.name + " is too tired to play right now!");
    }
  }

  status() {
    console.log("---- " + this.name + "'s Status ----");
    console.log("Hunger: " + this.hunger + "/10");
    console.log("Energy: " + this.energy + "/10");
    console.log("Happiness: " + this.happiness + "/10");
  }
}

const myPet = new Pet("Fluffy");
console.log("Created a new pet named " + myPet.name);
myPet.status();
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
    console.log("Hello, my name is " + this.name + "!");
  }
}

const person1 = new Person("Precia", 14);
console.log("Person: Name = " + person1.name + ", Age = " + person1.age);

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.pagesRead = 0;
  }
  
  read(pages) {
    this.pagesRead = this.pagesRead + pages;
    console.log("You read " + pages + " pages. Total pages read: " + this.pagesRead);
  }
  
  isLongBook() {
    return this.pages > 300;
  }
}

const book1 = new Book("Harry Potter", "J.K. Rowling", 350);
console.log("Book: Title = " + book1.title + ", Author = " + book1.author + ", Pages = " + book1.pages);

class Car {
  constructor(make, model, fuel) {
    this.make = make;
    this.model = model;
    this.fuel = fuel;
  }

  drive(distance) {
    const fuelUsed = distance * 0.1;
    this.fuel = this.fuel - fuelUsed;
    console.log("Driving " + distance + " miles");
    console.log("Remaining fuel: " + this.fuel);
  }

  refuel(amount) {
    this.fuel = this.fuel + amount;
    console.log("Refueled " + amount + " gallons. Current fuel: " + this.fuel);
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
    this.battery = this.battery + amount;
    if (this.battery > 100) {
      this.battery = 100;
      console.log("Battery fully charged! Level: " + this.battery + "%");
    } else {
      console.log("Charged " + amount + "%. Battery level: " + this.battery + "%");
    }
  }
}

Car.info();
const myCar = new Car("Toyota", "Camry", 15);
console.log("Car: " + myCar.make + " " + myCar.model + " with " + myCar.fuel + " gallons of fuel");

const myTesla = new ElectricCar("Tesla", "Model 3", 0, 50);
console.log("Electric Car: " + myTesla.make + " " + myTesla.model + " with " + myTesla.battery + "% battery");

console.log("\n--- Daily Routine ---");
person1.greet();
myCar.drive(30);
book1.read(25);
console.log("Is " + book1.title + " a long book? " + book1.isLongBook());
myTesla.charge(30);
myCar.refuel(5);
```

<script>
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, my name is " + this.name + "!");
  }
}

const person1 = new Person("Precia", 14);
console.log("Person: Name = " + person1.name + ", Age = " + person1.age);

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.pagesRead = 0;
  }

  read(pages) {
    this.pagesRead = this.pagesRead + pages;
    console.log("You read " + pages + " pages. Total pages read: " + this.pagesRead);
  }

  isLongBook() {
    return this.pages > 300;
  }
}

const book1 = new Book("Harry Potter", "J.K. Rowling", 350);
console.log("Book: Title = " + book1.title + ", Author = " + book1.author + ", Pages = " + book1.pages);

class Car {
  constructor(make, model, fuel) {
    this.make = make;
    this.model = model;
    this.fuel = fuel;
  }

  drive(distance) {
    const fuelUsed = distance * 0.1;
    this.fuel = this.fuel - fuelUsed;
    console.log("Driving " + distance + " miles");
    console.log("Remaining fuel: " + this.fuel);
  }

  refuel(amount) {
    this.fuel = this.fuel + amount;
    console.log("Refueled " + amount + " gallons. Current fuel: " + this.fuel);
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
    this.battery = this.battery + amount;
    if (this.battery > 100) {
      this.battery = 100;
      console.log("Battery fully charged! Level: " + this.battery + "%");
    } else {
      console.log("Charged " + amount + "%. Battery level: " + this.battery + "%");
    }
  }
}

Car.info();
const myCar = new Car("Toyota", "Camry", 15);
console.log("Car: " + myCar.make + " " + myCar.model + " with " + myCar.fuel + " gallons of fuel");

const myTesla = new ElectricCar("Tesla", "Model 3", 0, 50);
console.log("Electric Car: " + myTesla.make + " " + myTesla.model + " with " + myTesla.battery + "% battery");

console.log("\n--- Daily Routine ---");
person1.greet();
myCar.drive(30);
book1.read(25);
console.log("Is " + book1.title + " a long book? " + book1.isLongBook());
myTesla.charge(30);
myCar.refuel(5);
</script>

## Extra Credit

For extra credit, complete the additional challenges below:

1. Create a Bank class with properties accountNumber and balance, and methods deposit(amount) and withdraw(amount).
2. Create a CheckingAccount class that extends Bank. Add an overdraft property and modify withdraw() to handle overdrafts.
3. Create a SavingsAccount class that extends Bank. Add an interestRate property and a method calculateInterest() that returns the interest amount.
4. Create an example showing a customer with both checking and savings accounts, transferring money between them.

```javascript
class Bank {
  constructor(accountNumber, initialBalance) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
  }
  
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log("Deposited $" + amount + ". New balance: $" + this.balance);
      return true;
    } else {
      console.log("Error: Deposit amount must be positive");
      return false;
    }
  }
  
  withdraw(amount) {
    if (amount > 0) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log("Withdrew $" + amount + ". New balance: $" + this.balance);
        return true;
      } else {
        console.log("Insufficient funds!");
        return false;
      }
    } else {
      console.log("Error: Withdrawal amount must be positive");
      return false;
    }
  }
}

class CheckingAccount extends Bank {
  constructor(accountNumber, initialBalance, overdraftLimit) {
    super(accountNumber, initialBalance);
    this.overdraftLimit = overdraftLimit;
  }
  
  withdraw(amount) {
    if (amount > 0) {
      if (amount <= this.balance + this.overdraftLimit) {
        this.balance -= amount;
        if (this.balance < 0) {
          console.log("Withdrew $" + amount + " with overdraft. New balance: $" + this.balance);
        } else {
          console.log("Withdrew $" + amount + ". New balance: $" + this.balance);
        }
        return true;
      } else {
        console.log("Exceeds overdraft limit!");
        return false;
      }
    } else {
      console.log("Error: Withdrawal amount must be positive");
      return false;
    }
  }
}

class SavingsAccount extends Bank {
  constructor(accountNumber, initialBalance, interestRate) {
    super(accountNumber, initialBalance);
    this.interestRate = interestRate;
  }
  
  calculateInterest() {
    const interest = this.balance * this.interestRate;
    console.log("Interest calculated: $" + interest);
    return interest;
  }
  
  addInterest() {
    const interest = this.calculateInterest();
    this.deposit(interest);
    return interest;
  }
}

console.log("=== Banking Example ===");
const checking = new CheckingAccount("CH12345", 500, 100);
const savings = new SavingsAccount("SV67890", 1000, 0.05);

console.log("Initial checking balance: $" + checking.balance);
console.log("Initial savings balance: $" + savings.balance);

console.log("\n--- Transferring $200 from savings to checking ---");
if (savings.withdraw(200)) {
  checking.deposit(200);
}

console.log("\n--- Testing overdraft protection ---");
checking.withdraw(750);

console.log("\n--- Calculating interest on savings ---");
savings.addInterest();

console.log("\nFinal checking balance: $" + checking.balance);
console.log("Final savings balance: $" + savings.balance);
```

<script>
class Bank {
  constructor(accountNumber, initialBalance) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
  }
  
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log("Deposited $" + amount + ". New balance: $" + this.balance);
      return true;
    } else {
      console.log("Error: Deposit amount must be positive");
      return false;
    }
  }
  
  withdraw(amount) {
    if (amount > 0) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log("Withdrew $" + amount + ". New balance: $" + this.balance);
        return true;
      } else {
        console.log("Insufficient funds!");
        return false;
      }
    } else {
      console.log("Error: Withdrawal amount must be positive");
      return false;
    }
  }
}

class CheckingAccount extends Bank {
  constructor(accountNumber, initialBalance, overdraftLimit) {
    super(accountNumber, initialBalance);
    this.overdraftLimit = overdraftLimit;
  }
  
  withdraw(amount) {
    if (amount > 0) {
      if (amount <= this.balance + this.overdraftLimit) {
        this.balance -= amount;
        if (this.balance < 0) {
          console.log("Withdrew $" + amount + " with overdraft. New balance: $" + this.balance);
        } else {
          console.log("Withdrew $" + amount + ". New balance: $" + this.balance);
        }
        return true;
      } else {
        console.log("Exceeds overdraft limit!");
        return false;
      }
    } else {
      console.log("Error: Withdrawal amount must be positive");
      return false;
    }
  }
}

class SavingsAccount extends Bank {
  constructor(accountNumber, initialBalance, interestRate) {
    super(accountNumber, initialBalance);
    this.interestRate = interestRate;
  }
  
  calculateInterest() {
    const interest = this.balance * this.interestRate;
    console.log("Interest calculated: $" + interest);
    return interest;
  }
  
  addInterest() {
    const interest = this.calculateInterest();
    this.deposit(interest);
    return interest;
  }
}

console.log("=== Banking Example ===");
const checking = new CheckingAccount("CH12345", 500, 100);
const savings = new SavingsAccount("SV67890", 1000, 0.05);

console.log("Initial checking balance: $" + checking.balance);
console.log("Initial savings balance: $" + savings.balance);

console.log("\n--- Transferring $200 from savings to checking ---");
if (savings.withdraw(200)) {
  checking.deposit(200);
}

console.log("\n--- Testing overdraft protection ---");
checking.withdraw(750);

console.log("\n--- Calculating interest on savings ---");
savings.addInterest();

console.log("\nFinal checking balance: $" + checking.balance);
console.log("Final savings balance: $" + savings.balance);
</script>
