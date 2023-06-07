//  Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one
// let a = prompt("Enter a word or a sentence");
let a = "HelScriptlo";

if (a.substring(3, 9) == "Script") {
  let b = a.substring(0, 3).concat(a.substring(9, a.length));
  console.log(b);
} else console.log(a);
