//  Write a JavaScript program to capitalize the first letter of each word of a given string

let a = prompt("Enter a string : ");
// let a = "the quick brown fox jumps over the lazy dog";

let arr = a.split("");
for (let i = 0; i < a.length; i++) {
  if (i == 0) arr[i] = a.charAt(i).toUpperCase();
  if (a.charAt(i) == " ") arr[i + 1] = a.charAt(i + 1).toUpperCase();
}

console.log(arr.join(""));
