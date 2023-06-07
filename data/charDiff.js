//  Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string

let a = prompt("Enter a sentence : ");
let b = prompt("Enter a character : ").charAt(0);
let c = prompt("Enter a character : ").charAt(0);

let arr = a.split("");

for (let i = 0; i < arr.length; i++)
  if (a.charAt(i) == b && a.charAt(i + 3) == c) console.log(true);
  else console.log(false);
