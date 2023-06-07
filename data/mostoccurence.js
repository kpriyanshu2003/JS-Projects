// WAP to find the number which appears most in a given array of integers

/*
function array_element_mode(arr) {
  var ctr = [],
    ans = 0;

  for (var i = 0; i < 10; i++) {
    ctr.push(0);
  }
  for (var i = 0; i < arr.length; i++) {
    ctr[arr[i] - 1]++;
    if (ctr[arr[i] - 1] > ctr[ans]) {
      ans = arr[i] - 1;
    }
  }
  return ans + 1;
}
console.log(array_element_mode([1, 3, 3, 3, 3, 2, 2, 8, 1, 9]));

*/

const a = [1, 3, 3, 3, 3, 2, 2, 8, 1, 9];
let ctr = [];
for (let i = 0; i < 10; i++) ctr[i] = 0;
for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < ctr.length; j++) if (a[i] == j) ctr[j]++;
}
let max = -1;
for (let i = 0; i < ctr.length; i++) {
  if (ctr[i] > max) max = i;
}

console.log(max);
