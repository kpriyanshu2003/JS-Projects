//  Write a JavaScript program to switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case.
// Fox example "Write" will be write and "PHp" will be "PHP"

let a = prompt("Enter a sentence ");
let u = 0,
  l = 0;
for (let i = 0; i < a.length; i++) {
  if (a.charCodeAt(i) >= 65 && a.charCodeAt(i) <= 90) u++;
  if (a.charCodeAt(i) >= 97 && a.charCodeAt(i) <= 122) l++;
}
if (u < l) console.log(a.toLowerCase());
else if (u > l) console.log(a.toUpperCase());
else console.log("Both are same." + a.toUpperCase());
