//  Write a JavaScript exercise to get the extension of a filename.

const filename = "index.html";
const filename2 = "README.md";
let arr2 = filename2.split("");
let arr = [];

// M1
console.log(filename.split(".").pop());

// M2
for (let i = 0; i < filename2.length; i++) {
  if (arr2[i] == ".") arr = arr2.splice(i + 1, filename2.length);
}

console.log(arr);
