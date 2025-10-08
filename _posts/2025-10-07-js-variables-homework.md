---
layout: post
toc: True
breadcrumb: True
title: JS Variables Homework 
description: These are the homework problems and popcorn hacks.
permalink: /js-variables-homework
author: Precia Verma
categories: [Homework]
---

<style>
.glowing-text {
  color: #fff; /* Set the text color to white or a light color for better contrast */
  text-shadow: 0 0 10px #8a2be2, /* Purple glow */
               0 0 20px #8a2be2, /* Deeper purple glow */
               0 0 30px #4169e1, /* Blue glow */
               0 0 40px #4169e1; /* Deeper blue glow */

  font-weight: bold;
  margin-top: 0;
}
</style>

Presented by the
<h4 class="glowing-text">TINKERERS</h4>

<hr>

# <div style="font-weight:bold; text-decoration:underline;">Popcorn Hack 1 🍿😈</div>

Let's start diving into some of the questions. 

## Instructions

Below instructions refer to this code cell:

```html
<html>
<body>
  <h2>Popcorn Hack 1 Output</h2>
  <div id="output1"></div>

  <script>
  (() => {

    let name = "Alex";
    const age = 25;

    var city = "New York"; 
    let hobby = "painting";

    name = "Bessie";
    city = "Anishiapolis";

    typeof name;
    typeof age;
    typeof city;
    typeof hobby;
    console.log("name (" + typeof name + "): " + name);
    console.log("age (" + typeof age + "): " + age);
    console.log("city (" + typeof city + "): " + city);
    console.log("hobby (" + typeof hobby + "): " + hobby);


    document.getElementById("output1").innerText = name + " is " + age + " years old, lives in " + city + ", and loves " + hobby + ".";
    console.log(name + " is " + age + " years old, lives in " + city + ", and loves " + hobby + ".")

  })();
  </script>
</body>
</html>
```

<html>
<body>
  <h2>Popcorn Hack 1 Output</h2>
  <div id="output1"></div>

  <script>
  (() => {

    let name = "Alex";
    const age = 25;

    var city = "New York"; 
    let hobby = "painting";

    name = "Bessie";
    city = "Anishiapolis";

    typeof name;
    typeof age;
    typeof city;
    typeof hobby;
    console.log("name (" + typeof name + "): " + name);
    console.log("age (" + typeof age + "): " + age);
    console.log("city (" + typeof city + "): " + city);
    console.log("hobby (" + typeof hobby + "): " + hobby);


    document.getElementById("output1").innerText = name + " is " + age + " years old, lives in " + city + ", and loves " + hobby + ".";
    console.log(name + " is " + age + " years old, lives in " + city + ", and loves " + hobby + ".")

  })();
  </script>
</body>
</html>

Now, do the below with this code.

1. Adjust var declarations, names, values, etc. Mess around with it and observe any changes/errors. 
2. Think and/or discuss with your table: what changes did you notice?

Now let's make some changes :)

3. Uncomment the line saying `age = 2;` and look at your console. What do you notice?
TypeError: No Constand Variable; not declared.

4. Add a new variable called `hobby` with the value of "painting" and update the DOM output and console output to say:  
   "[NAME] is [AGE] years old, lives in [CITY], and loves [HOBBY]"
   I love painting

5. There's a keyword called `typeof` in JavaScript. Use this keyword to also display the data types of the variables.
   Example: `typeof "John"` gives `"string"` and `typeof 3.14` gives `"number"`

<hr>

# <div style="font-weight:bold; text-decoration:underline;">Popcorn Hack 2 🍿😈</div>

Follow the below instructions.

1. Go to the code cell below this text.
2. Using the correct JS variable naming convention, declare a Magic Number variable with the value returned by `input.value` to get a user response.
3. Convert it to a Number data type using Number(). Example: `let x = Number(x);` turns x into a Number. This is because prompt() always returns Strings.
4. Create variables `doubled`, `squared`, and `tripled` that contain the doubled, squared, and tripled values of the magic number.
5. Display the results in DOM and the console by changing output.innerText and using console.log().

```html
<html>
<body>

    <p>Click the button after entering your magic number!</p>

    <input type="number" id="magicInput" placeholder="Enter magic number">
    <button id="magicButton">Calculate</button>

    <div id="output2">Your results will appear here.</div>

    <script>
    (() => {

    const button = document.getElementById("magicButton");
    const input = document.getElementById("magicInput");
    const output = document.getElementById("output2");

    button.addEventListener("click", () => {

      let magicNumber = input.value;

      magicNumber = Number(magicNumber);

      let doubled = magicNumber * 2;
      let squared = magicNumber * magicNumber;
      let tripled = magicNumber * 3;

      output.innerText = `Magic Number: ${magicNumber}
Doubled: ${doubled}
Squared: ${squared}
Tripled: ${tripled}`;

      console.log(`Magic Number: ${magicNumber}`);
      console.log(`Doubled: ${doubled}`);
      console.log(`Squared: ${squared}`);
      console.log(`Tripled: ${tripled}`);

    });

    })();

    </script>

</body>
</html>
```

<html>
<body>

    <p>Click the button after entering your magic number!</p>

    <input type="number" id="magicInput" placeholder="Enter magic number">
    <button id="magicButton">Calculate</button>

    <div id="output2">Your results will appear here.</div>

    <script>
    (() => {

    const button = document.getElementById("magicButton");
    const input = document.getElementById("magicInput");
    const output = document.getElementById("output2");

    button.addEventListener("click", () => {

      let magicNumber = input.value;

      magicNumber = Number(magicNumber);

      let doubled = magicNumber * 2;
      let squared = magicNumber * magicNumber;
      let tripled = magicNumber * 3;

      output.innerText = `Magic Number: ${magicNumber}
Doubled: ${doubled}
Squared: ${squared}
Tripled: ${tripled}`;

      console.log(`Magic Number: ${magicNumber}`);
      console.log(`Doubled: ${doubled}`);
      console.log(`Squared: ${squared}`);
      console.log(`Tripled: ${tripled}`);

    });

    })();

    </script>

</body>
</html>

<hr>

# Variables Homework (Show what you know!)

### Homework Problems: Understanding JavaScript Variables 

There is a code block below the image saying "Have Fun!" Write your code in there.

### <span style="color: white; text-shadow: 2px 2px 5px white;"> Part A - Creating Variables</span>

1. Create a variable called `name` and store your first name in it. Print it in the console and to DOM.


2. Create two variables `age` and `city`. Print them in a single sentence like:
        - "I am 15 years old and I live in New York."


3. Create a variable `isStudent` (true/false). Print it.

### <span style="color: white; text-shadow: 2px 2px 5px white;"> Part B – Numbers & Strings</span>


4. Create two number variables num1 = 10 and num2 = 5. Print their sum, difference, product, and quotient.


1. Make a variable `favoriteFood` and print:
    My favorite food is ____.""

### <span style="color: white; text-shadow: 2px 2px 5px white;">Part C – Practice Problems</span>


6. Swap the values of two variables: x = 7 and y = 3.


7. Create a variable `fullName` by joining two strings: "FirstName" and "LastName".


8. Convert temperature C = 25 into Fahrenheit using F = (C * 9/5) + 32.


9. Create a variable score = 85.
    - Print "Pass" if score >= 50, else "Fail".



10. Write a program that asks for your name and age (use prompt)
     and prints: "Hello <name>, you are <age> years old."

11. Make a project that uses 5 variables to run. It can do anything yuou want, have fun and good luck!

Extra credit (optional): 
    Instead of hard coding the variable for number 9 to 85, make the variable a random number from 1-100.

![An image of have fun](https://as2.ftcdn.net/jpg/05/52/30/29/1000_F_552302940_Nct9zn3a6us0igBJqlkDQzQnbM4LLvmS.jpg "An image of have fun")

<html>

<body>
  <h2>Homework Output</h2>
  <div id="output"></div>

  <script>
    document.getElementById("output").innerText = "";
    (() => {

    document.getElementById("output").innerText += "PART A\n";
    
    let name = "Precia";
    console.log(name);
    document.getElementById("output").innerText += "My name is: " + name + "\n";
    
    let age = 15;
    let city = "New York";
    document.getElementById("output").innerText += "I am " + age + " years old and I live in " + city + ".\n";
    
    let isStudent = true;
    document.getElementById("output").innerText += "Student status: " + isStudent + "\n\n";
    
    document.getElementById("output").innerText += "PART B\n";
    
    let num1 = 10;
    let num2 = 5;
    
    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotient = num1 / num2;
    
    document.getElementById("output").innerText += "num1 = " + num1 + ", num2 = " + num2 + "\n";
    document.getElementById("output").innerText += "Sum: " + sum + "\n";
    document.getElementById("output").innerText += "Difference: " + difference + "\n";
    document.getElementById("output").innerText += "Product: " + product + "\n";
    document.getElementById("output").innerText += "Quotient: " + quotient + "\n\n";
    
    let favoriteFood = "pizza";
    document.getElementById("output").innerText += "My favorite food is " + favoriteFood + ".\n\n";
    
    document.getElementById("output").innerText += "PART C\n";
    
    let x = 7;
    let y = 3;
    document.getElementById("output").innerText += "Before swap: x = " + x + ", y = " + y + "\n";
    
    let temp = x;
    x = y;
    y = temp;
    
    document.getElementById("output").innerText += "After swap: x = " + x + ", y = " + y + "\n\n";
    
    let firstName = "FirstName";
    let lastName = "LastName";
    let fullName = firstName + " " + lastName;
    document.getElementById("output").innerText += "Full name: " + fullName + "\n\n";
    
    let celsius = 25;
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("output").innerText += celsius + "°C = " + fahrenheit + "°F\n\n";
    
    let score = Math.floor(Math.random() * 100) + 1;
    let result;
    
    if (score >= 50) {
      result = "Pass";
    } else {
      result = "Fail";
    }
    
    document.getElementById("output").innerText += "Score: " + score + ", Result: " + result + "\n\n";
    
    
    document.getElementById("output").innerText += "Problem 10: Prompt code is here but commented out\n\n";
    
    document.getElementById("output").innerText += "MINI PROJECT: Grade Calculator\n";
    
    let hw1 = 85;
    let hw2 = 92;
    let test = 78;
    let exam = 88;
    let part = 95;
    
    let finalScore = (hw1 + hw2 + test + exam + part) / 5;
    
    let letter;
    if (finalScore >= 90) {
      letter = "A";
    } else if (finalScore >= 80) {
      letter = "B";
    } else if (finalScore >= 70) {
      letter = "C";
    } else if (finalScore >= 60) {
      letter = "D";
    } else {
      letter = "F";
    }
    
    document.getElementById("output").innerText += "Homework 1: " + hw1 + "\n";
    document.getElementById("output").innerText += "Homework 2: " + hw2 + "\n";
    document.getElementById("output").innerText += "Test: " + test + "\n";
    document.getElementById("output").innerText += "Exam: " + exam + "\n";
    document.getElementById("output").innerText += "Participation: " + part + "\n\n";
    document.getElementById("output").innerText += "Final Score: " + finalScore.toFixed(1) + "\n";
    document.getElementById("output").innerText += "Grade: " + letter;
    
    })();
  </script>
</body>
</html>

# Submission

You will submit the link to your homework on a web page in the below form.  
If you are unable to get your homework accessible from the website, you can upload this Jupyter notebook to the form.

**IMPORTANT: If uploading, please name this Jupyter notebook in this format: [FirstName][LastName]_vars_hw.ipynb**
Example: SamarthHande_hw.ipynb

<https://forms.gle/UBDFErZpKpTApWap8>

Requirements for homework:
1. Parts A, B, and C should be completed. You will get .3 points for each question completed.
2. Up to 0.03 extra points will be given to code that demonstrates exceptional creativity and comprehension.
