// WAP to find the maximal difference among all possible pairs of a given array of integers

const a = [1, -2, 3, 4, 5, 6, 7, 8, 9, 0];
var max = -1;
for (let i = 0; i < a.length; i++) {
  for (let k = 0; i < a.length && k != i; k++) {
    var diff = Math.abs(a[i] - a[k]);
    if (diff > max) max = diff;
  }
}

console.log(max);
