// WAP to create callback function
// Callback Function -> The method of calling a function from a function
function morning(name) {
  console.log(" Morning,", name);
}
function afternoon(name) {
  console.log(" Afternoon", name);
}
function evening(name) {
  console.log(" Evening", name);
}
function night(name) {
  console.log(" Night", name);
}
function greet(a, callback) {
  process.stdout.write("Great"); // Use console.log. This won't run on browser. It is nodeJS
  callback(a);
}

greet("Lorem", morning);
greet("Ipsum", afternoon);
greet("Dolor", evening);
greet("Sit Amet", night);
