//  Write a JavaScript program to display the current day and time in the following format
//  Today is : Tuesday.
//  Current time is : 10 PM : 30 : 38
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dt = new Date();
let h = dt.getHours();
let m = dt.getMinutes();
let s = dt.getSeconds();
let day = dt.getDay();
let ampm = h < 12 ? "am" : "pm";
if (h > 12) h = h - 12;
if (h < 10) h = "0" + h;
if (m < 10) m = "0" + m;
if (s < 10) s = "0" + s;

console.log(`Today is : ${days[day]}`);
console.log(`Current time is : ${h} ${ampm} : ${m} : ${s}`);
