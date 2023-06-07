// WAP to find the maximal difference between any two adjacent elements of a given array of integers

const a = [12, 34, 123, 235, 365, 68, 786, 99, 7870, 70];
let max = -1;

for (let i = 0; i < a.length - 1; i++) {
  if (a[i] - a[i + 1] > max) max = a[i] - a[i + 1];
}

console.log("Max Difference : ", max);
