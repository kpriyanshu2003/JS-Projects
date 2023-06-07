// WAP to test out different console function

console.log("Logging");
console.error("Error");
console.warn("Warning");
console.info("Information");
console.debug("Debugging");
console.assert("Assertion" < "Ast"); // No Ouptut - As condition is true
console.assert(5 > 5);
console.assert(55 > 5); // No output - As condition is true
console.assert(5 > 55);

let obj = { a: 1, b: 2, c: 3 };
console.table(obj);

let obb = { a: [1, 2], b: [2, 4] };
console.table(obb);
