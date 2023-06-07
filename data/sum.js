//  Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum

let a = parseInt(prompt("Enter a number "));
let b = parseInt(prompt("Enter another number "));
console.log(`The sum of integers is : ${a + b}`);
if (a == b) console.log("Triple their sum is " + 3 * (a + b));
