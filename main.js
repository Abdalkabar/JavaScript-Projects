// Set up two numbers for multiple math operations
var firstNumber = 20;
var secondNumber = 7;

// Subtraction
var difference = firstNumber - secondNumber;
document.write('The result of ' + firstNumber + ' - ' + secondNumber + ' is ' + difference + '.<br>');

// Multiplication
var product = firstNumber * secondNumber;
document.write('The result of ' + firstNumber + ' * ' + secondNumber + ' is ' + product + '.<br>');

// Division
var quotient = firstNumber / secondNumber;
document.write('The result of ' + firstNumber + ' / ' + secondNumber + ' is ' + quotient + '.<br>');

// Addition
var sum = firstNumber + secondNumber;
document.write('The result of ' + firstNumber + ' + ' + secondNumber + ' is ' + sum + '.<br>');

// Modulus
var remainder = firstNumber % secondNumber;
document.write('The remainder of ' + firstNumber + ' % ' + secondNumber + ' is ' + remainder + '.<br>');

// Negation
var negatedNumber = -firstNumber;
document.write('The negation of ' + firstNumber + ' is ' + negatedNumber + '.<br>');

// Increment
var incrementNumber = firstNumber;
incrementNumber++;
document.write('After incrementing, the value is ' + incrementNumber + '.<br>');

// Decrement
var decrementNumber = secondNumber;
decrementNumber--;
document.write('After decrementing, the value is ' + decrementNumber + '.<br>');

// Random number
var randomValue = Math.random();
document.write('A random number between 0 and 1: ' + randomValue + '.<br>');

// Math object method
var sqrtValue = Math.sqrt(144);
document.write('The square root of 144 using Math.sqrt() is ' + sqrtValue + '.<br>');

// Combined operation
var combined = firstNumber * secondNumber + (firstNumber - secondNumber);
document.write('The result of ' + firstNumber + ' * ' + secondNumber + ' + (' + firstNumber + ' - ' + secondNumber + ') is ' + combined + '.');
