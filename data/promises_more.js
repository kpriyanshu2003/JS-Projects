// More on Promises

let a = new Promise((resolve, reject) => {
  console.log("promises is pending");
  setTimeout(() => {
    console.log("I am a promise and I am fulfilled");
    resolve(560);
    // reject(new Error("I am an error"));
  }, 5000);
});

// To get the value
a.then((value) => {
  console.log(value + " value");
  return 222;
}).then((value) => {
  console.log("Hello World");
  console.log(value + " value");
});

// TO get the error
a.catch((error) => {
  console.log(error + "error occured");
});
