//  Write a JavaScript program to get the current date.
//  mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let dt = new Date();
let mm = dt.getMonth();
let dd = dt.getDate();
let yyyy = dt.getFullYear();

if (dd < 10) dd = "0" + dd;
if (mm < 10) mm = "0" + mm;

console.log(`${mm}-${dd}-${yyyy}`);
console.log(`${mm}/${dd}/${yyyy}`);
console.log(`${dd}-${mm}-${yyyy}`);
console.log(`${dd}/${mm}/${yyyy}`);
