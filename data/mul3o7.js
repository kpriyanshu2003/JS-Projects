//  Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7

let a = parseInt(prompt("Enter a number"));
// let a = 63;
if (a % 3 == 0 && a % 7 == 0) console.log("It is divisible by both 3 and 7");
else if (a % 3 == 0) console.log("It is divisible by 3");
else if (a % 7 == 0) console.log("It is divisible by 7");
else console.log("It is not divisible by 3 or 5");
