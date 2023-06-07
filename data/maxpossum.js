// WAP to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order.) of a given array of positive integers

const arr = [1, 0, 2, 9, 3, 8, 4, 7, 5, 60];
let max = -1;

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] + arr[i + 1] > max) max = arr[i] + arr[i + 1];
}

console.log("Max Sum : ", max);
