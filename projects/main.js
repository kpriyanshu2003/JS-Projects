let string = "  HELLO   ";
let regex = /^\s+|\s+$/g; // there should be a global
let result = string.replace(regex, "");
console.log(string.match(regex));
console.log(`'${result}'`);
