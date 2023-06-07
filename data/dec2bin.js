//  WAP a JS program to convert decimal to binary

// let a = prompt("Enter a decimal number ");
let a = 12;

let binary = "";
while (a > 0) {
  if (a % 2 == 1) {
    binary = "1" + binary;
  } else {
    binary = "0" + binary;
  }
  a = Math.floor(a / 2);
}

console.log(binary);
