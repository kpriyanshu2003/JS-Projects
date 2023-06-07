// Promises

let a = new Promise((resolve, reject) => {
  console.log("This is promises");
  resolve("Resolve Statement");
  // reject(new Error("Error Statement"));
});

console.log(a);
