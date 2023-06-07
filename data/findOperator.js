//  Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.  Go to the editor
//  For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator(*) to obtain x * y = z

let a = parseInt(prompt("Enter 1st operator : "));
let b = parseInt(prompt("Enter 2nd operator : "));
let c = parseInt(prompt("Enter 2nd operator : "));

if (a + b == c) console.log("Sign: Addition");
else if (a - b == c) console.log("Sign : Subtraction");
else if (a * b == c) console.log("Sign : Multiplication");
else if (a / b == c) console.log("Sign : Division");
else if (a % b == c) console.log("Sign : Modulus");
else console.log("None of the operators avaliable");
