//  WAP to test out various array methods

let a = [1, 2, 3, 4, 5];
let b = [9, 8, 7, 6];
a.push(90);
console.log(a);
console.log(a.length);
a = a.join(b);
a = a.split(",");
console.log(a);

b = a.map(myFunction);
console.log(b);

function myFunction(num) {
  return num * 10;
}


