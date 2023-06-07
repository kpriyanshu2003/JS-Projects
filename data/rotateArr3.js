//  Write a JavaScript program to rotate the elements left of a given array of integers of length 3

let a = "the quick brown fox jumps over the lay dog";
a = a.split("");
for (let i = 0; i < a.length; i++) if (i < a.length - 3) a[i] = a[i + 3];
console.log(a.join(""));
