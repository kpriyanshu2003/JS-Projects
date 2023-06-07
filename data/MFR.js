// WAP to test Map, Filter and Reduce

let a = [1, 2, 3, 4];

let b = a.map(mapF);
let c = a.filter(filterF);
let d = a.reduce(reduceF);

console.log(b);
console.log(c);
console.log(d);

function mapF(num) {
  return num * 10;
}

function filterF(num) {
  return num >= 3;
}

function reduceF(n1, n2) {
  return n1 * n2;
}
