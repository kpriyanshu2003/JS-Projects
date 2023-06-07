//  Write a JavaScript program to check whether the last digit of the three given positive integers is same

// let a = parseInt(prompt("Enter a number"));
// let b = parseInt(prompt("Enter another number"));
// letc = parseInt(prompt("Enter another number"));

let a = 20,
  b = 30,
  c = 40;

if (a % 10 == b % 10 && b % 10 == c % 10) console.log(true);
else console.log(false);
