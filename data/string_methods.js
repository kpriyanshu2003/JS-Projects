// WAP to test various JS strig methods

let a = "Hello World";
let b = "                HI               ";
console.log(a.split(""));
console.log(a.replace("o", "X"));
console.log(a.replaceAll("l", "Z"));
console.log(b);
console.log("'", b.trim(), "'");
console.log("'", b.trimEnd(), "'");
console.log("'", b.trimStart(), "'");
console.log(a.length);
console.log(a.concat(b));
a = a.concat(b);
console.log(a.indexOf("H"));
console.log(a.lastIndexOf("H"));
console.log(a.endsWith("y"));
console.log(a.substring(2, 21));
