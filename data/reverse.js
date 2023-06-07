// Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

let rt = document.getElementById("root");
let s = "w3resource";
let arr = s.split("");
let arr1 = [];
i = arr.length;

for (let i = arr.length - 1; i >= 0; i--) {
  let el = arr[i];
  arr1.splice(0, 0, el);
  arr1 = el + arr1;
  rt.innerHTML = arr1;
}
console.log(arr1);
