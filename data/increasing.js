// Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode.  Go to the editor
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

let a = parseInt(prompt("Enter a number"));
let b = parseInt(prompt("Enter a number"));
let c = parseInt(prompt("Enter a number"));

let d1 = b - a,
  d2 = c - b;

if (d1 < d2 && d1 > 0 && d2 > 0) console.log("Strictly Increasing.");
else if (d1 >= 0 || d2 >= 0) console.log("Soft Increasing");
else console.log("Not Increasing");
