// Promise API
let p1 = new Promise((resolve, reject) => {
  console.log("Promise 1 Resolved");
  resolve(51);
});

let p2 = new Promise((resolve, reject) => {
  console.log("Promsie 2 Resolved");
  resolve(52);
});

let p3 = new Promise((resolve, reject) => {
  console.log("Promise 3 Resolved");
  reject(new Error("Error Occured"));
});

p1.then((value) => {
  console.log(value + " p1");
});
p2.then((value) => {
  console.log(value + " p2");
});
p3.then((value) => {
  console.log(value + " p3");
});
