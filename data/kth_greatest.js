// WAP to find the kth greatest element of a given array of integers

const arr = [1, 9, 2, 8, 3, 7, 4, 6, 5, 0];
let ar = arr;
let a = parseFloat(prompt("Enter the value of k "));
// let a = 7;
ar.sort(); // In built function to sort the array
console.log("The kth greatest element is : ", ar[a]);

ar = arr;
// My logic to sort array
let temp = ar[0];
for (let i = 0; i < ar.length; i++) {
  if (a[i] < temp) {
    temp = a[i] ^ temp;
    a[i] = a[i] ^ temp;
    temp = a[i] ^ temp;
  }
}

console.log("The kth greatest element is : ", ar[a]);
