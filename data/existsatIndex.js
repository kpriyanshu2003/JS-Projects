//  Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.

let a = prompt("Enter a word ");
let b = prompt("Enter a character");
// let a = "Lorem ipsum dolor sit amet";
// let b = "e";

if (a.length < 5) console.log(a);
else {
  if (a.split("")[2] == b || a.split("")[3] == b || a.split("")[4] == b)
    console.log("Character found");
  else console.log("Character was not found");
}
