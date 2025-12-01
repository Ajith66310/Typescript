"use strict";
function func1(a, b) {
    return a + b;
}
const nums12 = [1, 2, 3];
const doubled = nums12.map(n => n * 2);
console.log(doubled);
function distanceFromOrgin(p) {
    return Math.hypot(p.x, p.y);
}
distanceFromOrgin({ x: 30, y: 20 });
