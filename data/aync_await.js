// Async and Await

function resolver() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise");
      resolve(51);
    }, 5000);
  });
}

async function asyncFunc() {
  const conf = await resolver();
  console.log(conf, " Hella");
}

function Func() {
  const conf = resolver();
  console.log(conf, " Hello");
}

Func();
asyncFunc();
