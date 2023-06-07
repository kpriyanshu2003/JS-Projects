//  Write a JavaScript program to concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string

let a = prompt("Enter a string : ");
let b = prompt("Enter a string : ");

let c = a.length,
  d = b.length;

if (c == d) console.log(true);
else if (c > d) {
  a = a.slice(0, d);
  console.log(a);
} else if (c < d) {
  b = b.slice(0, -1);
  console.log(b);
} else console.log(false);
