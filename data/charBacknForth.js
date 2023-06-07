//  Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back

let a = prompt("Enter a word or a sentence");
// let a = "Lorem Ipsum dolor sit amet";
let z = a
  .split("")[0]
  .concat(a)
  .concat(a.split("")[a.length - 1]);

console.log(z);
