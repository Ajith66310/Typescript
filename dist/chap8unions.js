"use strict";
//value -> this or that
function printId(id) {
    // id.toUpperCase()
    if (typeof id === 'string') {
        id.toUpperCase();
    }
    else {
        id.toFixed(2);
    }
}
function describeUser(u) {
    if (u.role === 'admin') {
        console.log(u.permissions);
    }
    else {
    }
}
function describeUserWithInOperator(u) {
    if ('permissions' in u) {
        console.log(u.permissions);
    }
    else {
        console.log(u.loyaltyPoints);
    }
}
//array of union & union of array
const arrofUnion = ['a', 1, 'b', 2];
arrofUnion.push("2");
arrofUnion.push(2);
const unionOfArrays = Math.random() > 0.1 ? ["a", "b"] : [1, 2];
// unionOfArrays.push("d")
