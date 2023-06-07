//  Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case

let a = prompt("Enter a sentence");
// let a = "Lorem Ipsum Dolor Sit Amet";

if (a.length < 4) console.log(a.toUpperCase());
else
  console.log(a.substring(0, 3).toLowerCase().concat(a.substring(3, a.length)));
