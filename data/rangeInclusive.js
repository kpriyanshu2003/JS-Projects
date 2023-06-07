//  Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive

let a = parseInt(prompt("Enter a number"));
// let a = 55;

if (a <= 60 && a >= 40) console.log("It is in the range 40 to 60 inclusive");
if (a <= 100 && a >= 70) console.log("It is in the range 70 to 100 inclusive");
