//  Write a JavaScript program to check from two given integers, whether one is positive and another one is negative

let a = parseInt(prompt("Enter a number : "));
let b = parseInt(prompt("Enter another number : "));

if (a < 0 && b > 0) console.log(`${a} is negative. And ${b} is positive`);
else if (a > 0 && b < 0) console.log(`${a} is positive. And ${b} is negative`);
else console.log("Condition not matched");
