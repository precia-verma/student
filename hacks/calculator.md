---
title: JS Calculator 
comments: true
hide: true
layout: base
description: A common way to become familiar with a language is to build a calculator.  This calculator shows off button with actions.
permalink: /calculator
---

<!-- 
Hack 0: Right justify result
Hack 1: Test conditions on small, big, and decimal numbers, report on findings. Fix issues.
Hack 2: Add the common math operation that is missing from calculator
Hack 3: Implement 1 number operation (ie SQRT) 
-->

<!-- 
HTML implementation of the calculator. 
-->

<!-- 
    Style and Action are aligned with HRML class definitions
    style.css contains majority of style definition (number, operation, clear, and equals)
    - The div calculator-container sets 4 elements to a row
    Background is credited to Vanta JS and is implemented at bottom of this page
-->
<style>
  .calculator-container {
    display: grid;
    grid-template-columns: repeat(4, 60px);
    grid-template-rows: repeat(6, 60px);
    gap: 8px;
    width: max-content;
    margin: 0 auto;
    background: rgba(255,255,255,0.8);
    padding: 20px;
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  .calculator-output {
    grid-column: 1 / span 4;
    grid-row: 1;
    border-radius: 10px;
    padding: 0.25em 0.5em;
    font-size: 24px;
    border: 3px solid #222;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: #f9f9f9;
    min-height: 40px;
    margin-bottom: 8px;
  }
  .calculator-number, .calculator-operation, .calculator-clear, .calculator-equals {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    border-radius: 8px;
    background: #e0e0e0;
    cursor: pointer;
    user-select: none;
    border: 1px solid #bbb;
    transition: background 0.2s;
  }
  .calculator-number:hover, .calculator-operation:hover, .calculator-clear:hover, .calculator-equals:hover {
    background: #d1d1d1;
  }
  .calculator-operation {
    background: #ffd966;
    font-weight: bold;
  }
  .calculator-clear {
    background: #ffb3b3;
    font-weight: bold;
  }
  .calculator-equals {
    background: #b3ffd9;
    font-weight: bold;
    grid-column: 1 / span 4;
    font-size: 24px;
  }
  canvas {
    filter: none;
  }
</style>

<!-- Add a container for the animation -->
<div id="animation">
  <div class="calculator-container">
    <!-- Output display -->
    <div class="calculator-output" id="output">0</div>
    <!-- 7 8 9 / -->
    <div class="calculator-number" style="grid-row:2;grid-column:1;">7</div>
    <div class="calculator-number" style="grid-row:2;grid-column:2;">8</div>
    <div class="calculator-number" style="grid-row:2;grid-column:3;">9</div>
    <div class="calculator-operation" style="grid-row:2;grid-column:4;">/</div>
    <!-- 4 5 6 * -->
    <div class="calculator-number" style="grid-row:3;grid-column:1;">4</div>
    <div class="calculator-number" style="grid-row:3;grid-column:2;">5</div>
    <div class="calculator-number" style="grid-row:3;grid-column:3;">6</div>
    <div class="calculator-operation" style="grid-row:3;grid-column:4;">*</div>
    <!-- 1 2 3 - -->
    <div class="calculator-number" style="grid-row:4;grid-column:1;">1</div>
    <div class="calculator-number" style="grid-row:4;grid-column:2;">2</div>
    <div class="calculator-number" style="grid-row:4;grid-column:3;">3</div>
    <div class="calculator-operation" style="grid-row:4;grid-column:4;">-</div>
    <!-- A/C 0 . + -->
    <div class="calculator-clear" style="grid-row:5;grid-column:1;">A/C</div>
    <div class="calculator-number" style="grid-row:5;grid-column:2;">0</div>
    <div class="calculator-number" style="grid-row:5;grid-column:3;">.</div>
    <div class="calculator-operation" style="grid-row:5;grid-column:4;">+</div>
    <!-- = -->
    <div class="calculator-equals" style="grid-row:6;grid-column:1/span 4;">=</div>
  </div>
</div>

<!-- JavaScript (JS) implementation of the calculator. -->
<script>
// initialize important variables to manage calculations
var firstNumber = null;
var operator = null;
var nextReady = true;
// build objects containing key elements
const output = document.getElementById("output");
const numbers = document.querySelectorAll(".calculator-number");
const operations = document.querySelectorAll(".calculator-operation");
const clear = document.querySelectorAll(".calculator-clear");
const equals = document.querySelectorAll(".calculator-equals");

// Number buttons listener
numbers.forEach(button => {
  button.addEventListener("click", function() {
    number(button.textContent);
  });
});

// Number action
function number (value) { // function to input numbers into the calculator
    if (value != ".") {
        if (nextReady == true) { // nextReady is used to tell the computer when the user is going to input a completely new number
            output.innerHTML = value;
            if (value != "0") { // if statement to ensure that there are no multiple leading zeroes
                nextReady = false;
            }
        } else {
            output.innerHTML = output.innerHTML + value; // concatenation is used to add the numbers to the end of the input
        }
    } else { // special case for adding a decimal; can't have two decimals
        if (output.innerHTML.indexOf(".") == -1) {
            output.innerHTML = output.innerHTML + value;
            nextReady = false;
        }
    }
}

// Operation buttons listener
operations.forEach(button => {
  button.addEventListener("click", function() {
    operation(button.textContent);
  });
});

// Operator action
function operation (choice) { // function to input operations into the calculator
    if (firstNumber == null) { // once the operation is chosen, the displayed number is stored into the variable firstNumber
        firstNumber = parseInt(output.innerHTML);
        nextReady = true;
        operator = choice;
        return; // exits function
    }
    // occurs if there is already a number stored in the calculator
    firstNumber = calculate(firstNumber, parseFloat(output.innerHTML)); 
    operator = choice;
    output.innerHTML = firstNumber.toString();
    nextReady = true;
}

// Calculator
function calculate (first, second) { // function to calculate the result of the equation
    let result = 0;
    switch (operator) {
        case "+":
            result = first + second;
            break;
        case "-":
            result = first - second;
            break;
        case "*":
            result = first * second;
            break;
        case "/":
            result = first / second;
            break;
        default: 
            break;
    }
    return result;
}

// Equals button listener
equals.forEach(button => {
  button.addEventListener("click", function() {
    equal();
  });
});

// Equal action
function equal () { // function used when the equals button is clicked; calculates equation and displays it
    firstNumber = calculate(firstNumber, parseFloat(output.innerHTML));
    output.innerHTML = firstNumber.toString();
    nextReady = true;
}

// Clear button listener
clear.forEach(button => {
  button.addEventListener("click", function() {
    clearCalc();
  });
});

// A/C action
function clearCalc () { // clears calculator
    firstNumber = null;
    output.innerHTML = "0";
    nextReady = true;
}
</script>

<!-- 
Vanta animations just for fun, load JS onto the page
-->
<script src="{{site.baseurl}}/assets/js/three.r119.min.js"></script>
<script src="{{site.baseurl}}/assets/js/vanta.halo.min.js"></script>
<script src="{{site.baseurl}}/assets/js/vanta.birds.min.js"></script>
<script src="{{site.baseurl}}/assets/js/vanta.net.min.js"></script>
<script src="{{site.baseurl}}/assets/js/vanta.rings.min.js"></script>

<script>
// setup vanta scripts as functions
var vantaInstances = {
  halo: VANTA.HALO,
  birds: VANTA.BIRDS,
  net: VANTA.NET,
  rings: VANTA.RINGS
};

// obtain a random vanta function
var vantaInstance = vantaInstances[Object.keys(vantaInstances)[Math.floor(Math.random() * Object.keys(vantaInstances).length)]];

// run the animation
vantaInstance({
  el: "#animation",
  mouseControls: true,
  touchControls: true,
  gyroControls: false
});
</script>
