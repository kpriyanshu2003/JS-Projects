// WAP to find the number of sorted pairs formed by its elements of a given array of integers such that one element in the pair is divisible by the other one

const a = [2, 4, 16];
let n = 3;
let c = 0;
for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a.length; j++) {
    if (c == n) break;
    if (i != j && a[i] < a[j]) {
      console.log("(", a[i], " , ", a[j], ")");
      c++;
    }
  }
}
