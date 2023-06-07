//  Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three

let a = prompt("Enter a sentence : ");
// let a = "the quick brown fox jumps over the lazy dog";

if (a.length % 2 == 0 && a.length > 3)
  console.log("Even sentence. Cannot proceed");
else {
  let c = a.length / 2;
  let b = a.substring(c - 1, c + 2);
  console.log(b);
}
