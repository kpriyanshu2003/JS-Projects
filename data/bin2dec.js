// WAP in JS to convert binary number into decimal

// let a = prompt("Enter a binary number : ");
let a = "110";

let decimal = 0;
let l = a.length;
for (let i = l - 1; i >= 0; i--) {
  if (a[i] == "1") decimal += Math.pow(2, l - 1 - i);
}
console.log(decimal);
