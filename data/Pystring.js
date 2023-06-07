//  Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string

let a = prompt("Enter a word :");
// let a = "hello";
arr = a.split("");
if (arr[0] == "P" && arr[1] == "y") console.log(a);
else console.log("Py" + a);
