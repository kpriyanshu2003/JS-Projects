//  Write a JavaScript program to replace every character in a given string with the character following it in the alphabet

// let a = prompt("Enter a string : ");

let a = "Lorem Ipsum";

console.log(a.charCodeAt(0));
console.log(String.fromCharCode(65));
let arr = [];

for (let i = 0; i < a.length; i++) {
  arr[i] = String.fromCharCode(a.charCodeAt(i) + 1);
}

console.log(arr.join(""));
