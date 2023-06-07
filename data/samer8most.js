//  Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit

// let a = parseInt(prompt("Enter number 1 : "));
// let b = parseInt(prompt("Enter number 2 : "));
// let c = parseInt(prompt("Enter number 3 : "));

let a = 10,
  b = 20,
  c = 30;

if (a > 0 && b > 0 && c > 0) {
  if (a % 10 == b % 10 || a % 10 == c % 10 || b % 10 == c % 10)
    console.log(true);
  else console.log(false);
}
