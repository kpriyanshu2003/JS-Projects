// WAP to find the number of times to replace a given number with the sum of its digits until it convert to a single digit number

let a = parseInt(prompt("Enter a number : "));
// let a = 29;
let d,
  s = 0,
  c = 0;

while (a != 0) {
  c++;
  d = parseInt(a % 10);
  s = s + d;
  a = parseInt(a / 10);
  if (a == 0) {
    if (s.toString().length == 1) break;
    a = s;
    s = 0;
  }
}
console.log(s);
