// WAP to check whether a point lies strictly inside a given circle

let a, b, x, y, r;
(a = 1), (b = 2), (x = 0), (y = 0), (r = 2.2);

var dist = Math.sqrt(Math.pow(b - y, 2) + Math.pow(a - x, 2));
if (dist < r) console.log("The point lies within the circle");
else if (dist == r) console.log("The point lies on the circle");
else console.log("The point is outside the circle");
