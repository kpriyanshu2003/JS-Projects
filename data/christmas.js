const dt = new Date();
let y = dt.getFullYear();
const chm = new Date(y, 11, 25);
let dm = chm.getMonth() - dt.getMonth();
let dd = chm.getDate() - dt.getDate();
if (dd < 0) {
  dd = 30 - dd;
  dm--;
}
console.log(`Time left : ${dm} months and ${dd} days`);
