//  Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference

let a = parseInt(prompt("Enter a number : "));
console.log(a - 13);
if (a > 13) console.log(Math.pow(a - 13, 2));
