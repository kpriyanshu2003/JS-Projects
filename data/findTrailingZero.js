// WAP to find the number of trailing zeros in the decimal representation of the factorial of a given number

let n = 10,
  c = 0;

function factorial(num) {
  if (num == 0) return 1;
  else return num * factorial(num - 1);
}

let num = factorial(n);
while (num != 0) {
  d = num % 10;
  if (d == 0) c++;
  else break;
  num = num / 10;
}

console.log(c);
