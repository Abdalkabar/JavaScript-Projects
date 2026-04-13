// Declare a variable
let myVariable = "Hello, World!";

// Use document.write() and typeof operator to display the data type
document.write("The data type of myVariable is: " + typeof myVariable);

// Demonstrate type coercion
let num = 5;
let str = "10";
let coercedResult = num + str; // Type coercion: number + string = string
document.write("<br>The result of type coercion (5 + '10'): " + coercedResult + " (type: " + typeof coercedResult + ")");

// Display Infinity and -Infinity
let largeNumber = Number.MAX_VALUE * 2;
let negativeLargeNumber = -Number.MAX_VALUE * 2;
document.getElementById("output").innerHTML = "Infinity: " + largeNumber + "<br>-Infinity: " + negativeLargeNumber + "<br>Boolean Logic:<br>5 > 3: " + (5 > 3) + "<br>3 < 5: " + (3 < 5) + "<br>5 < 3: " + (5 < 3) + "<br>Double Equal Signs:<br>5 == '5': " + (5 == "5") + "<br>5 == 6: " + (5 == 6) + "<br>Triple Equal Signs:<br>5 === 5: " + (5 === 5) + "<br>5 === '5': " + (5 === "5") + "<br>5 === 6: " + (5 === 6) + "<br>'hello' === 'world': " + ("hello" === "world") + "<br>AND Operator:<br>true && true: " + (true && true) + "<br>true && false: " + (true && false) + "<br>OR Operator:<br>true || false: " + (true || false) + "<br>false || false: " + (false || false) + "<br>NOT Operator:<br>!true: " + (!true) + "<br>!false: " + (!false);

// Perform a math operation with console.log()
console.log("Math operation: 10 + 5 = " + (10 + 5));

// Boolean Challenge: Display “false” in the console using Boolean logic
console.log("Boolean logic resulting in false: 5 > 10 is " + (5 > 10));