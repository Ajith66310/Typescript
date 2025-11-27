"use strict";
function direct(d) {
    console.log(d);
}
const d = "left"; // TS keeps literals type "left"
direct(d);
let d1 = "left"; // TS widens to string 
// direct(d1)
let d2 = "left";
direct(d2);
