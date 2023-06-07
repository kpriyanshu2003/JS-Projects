//  Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19

let a = parseInt(prompt("Enter a number "));
console.log("Absolute Difference is " + Math.abs(a - 19));
if (a > 19)
  console.log("Triple the absolute difference " + 3 * Math.abs(a - 19));
