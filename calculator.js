// Say hello and state purpose
var x;
x = prompt("Hello, I am a calculator. What's your name?");
alert("Hello " + x + " nice to meet you.  Click OK to continue");
// Ask for operation
var operation, a, b;
operation = prompt("Do you want to add, subtract, multiply, divide, exponent, root");       // If not a stated operation ask again
// Make sure user input is one of the selections    
    while (operation !== "add" && operation !== "subtract" && operation !=="multiply" && operation !=="divide" && operation !== "exponent" && operation !== "root") {
        operation = prompt("Please use add, subtract, multiply, divide, exponent, root");
    }
// Ask for number
stringA = prompt("Please type a number");
// Change string into a number
var a = parseInt (stringA);
// Check to make sure input is a number
while (isNaN(a)) {
    stringA = prompt("Sorry you must enter a number");
    a = parseInt (stringA); 
}

// Ask for second number
stringB = prompt("Please type your second number");
// Change string to number
var b = parseInt (stringB);
// Check to make sure input is a number        
while (isNaN(b)) {
    stringB = prompt("Sorry you must enter a number");
    b = parseInt (stringB); 
}
// b cannot be zero for division or root
if ((operation === "divide" || operation === "root") && b === 0) {
    stringB = prompt("Sorry, you can't use zero for this operation");
    var b = parseInt (stringB);       
    while (isNaN(b)) {
        stringB = prompt("Sorry you must enter a non zero number");
        b = parseInt (stringB);
    }  
}

// Object calculator with functions
let calculator = {
    add: function (a, b) {              // Create add function
        return a + b;                   // Return function
    },
    subtract: function (a, b) {         // Create subtract function
        return a - b;                   // Return function
    },
    multiply: function (a, b) {         // Create multiply function
        return a * b;                   // Return function
    },
    divide: function (a, b) {           // Create divide function
        return a / b;                   // Return function
    },
    exponent: function (a, b) {         // Create exponent function
        return Math.pow(a, b);          // Return function
    },
    root: function (a, b) {             // Create square root function
        return Math.pow(a, 1/b);        // Return function
    }
}

    if (operation === "add") {
        var result = calculator.add (a, b);
        alert (a + " + " + b + " = " + result);
    }
    if (operation === "subtract") {
        var result = calculator.substract (a, b);
        alert (a + " - " + b + " = " + result);
    }
    if (operation === "multiply") {
        var result = calculator.multiply (a, b);
        alert (a + " x " + b + " = " + result);
    }
    if (operation === "divide") {
        var result = calculator.divide (a, b);
        alert (a + " / " + b + " = " + result);
    }
    if (operation === "exponent") {
        var result = calculator.exponent (a, b);
        alert (a + " to the power of " + b + " = " + result);
    }
    if (operation === "root") {
        var result = calculator.root (a, b);
        alert (a + " nth root of " + b + " = " + result);
    }
