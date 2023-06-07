//  Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

let a = parseInt(prompt("Enter a number"));
let b = parseInt(prompt("Enter another number"));

if (Math.abs(100 - a) < Math.abs(100 - b)) console.log(`${a} is nearest`);
else if (Math.abs(100 - a) > Math.abs(100 - b)) console.log(`${a} is nearest`);
else if (Math.abs(100 - a) = Math.abs(100 - b)) console.log(`$Both are at same`);
else console.log("An error occured")
