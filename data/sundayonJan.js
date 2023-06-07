// WAP to find on which year doees 1st Jan falls on Sunday between 2014 and 2050

for (let i = 2014; i <= 2050; i++) {
  let dt = new Date(i, 0, 1);
  let day = dt.getDay();
  if (day == 0) console.log(i);
}
