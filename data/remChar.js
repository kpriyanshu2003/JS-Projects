//  Write a JavaScript program to remove a character at the specified position of a given string and return the new string

// let a = prompt("Enter a word : ");
let a = "Hello World";
// let b = parseInt("Specify the position to remove the character : ");
let b = 6;
if (b > a.length) console.log("Error: Position greater than word length");
else {
  let a1 = a.substring(0, b);
  let a2 = a.substring(b + 1, a.length);
  a = a1.concat(a2);
  console.log(a);
}
