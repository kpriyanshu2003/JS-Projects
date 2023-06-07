// Write a Javascript program to check the total marks of a student in various examinations. If total are greater than 90 then print A+ otherwise false.

let p = parseInt(prompt("Enter the marks obtained in physics"));
let m = parseInt(prompt("Enter the marks obtained in maths"));
let c = parseInt(prompt("Enter the marks obtained in chemistry"));
// let p = 90,
//   m = 92,
//   c = 98;

if (p + c + m >= 90) console.log("Grade: A+");
else console.log(false);
