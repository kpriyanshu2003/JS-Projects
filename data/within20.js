// Write a JavaScript program to check whether a given integer is within a range of 20 from 100 or 400

let a = prompt("Enter a number ");
if (Math.abs(100 - a) <= 20 || Math.abs(400 - a) <= 20) console.log(true);
