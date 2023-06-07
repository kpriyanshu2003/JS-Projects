//  Write a JavaScript program to find whether the members of a given array of integers is a permutation of numbers from 1 to a given integer

function factorial(num) {
  if (num == 0) return 1;
  else return num * factorial(num - 1);
}

let a = parseInt(prompt("Enter a number : "));

for (let i = 1; i <= a; i++)
  console.log(`Factorial of ${i} is ${factorial(i)}`);
