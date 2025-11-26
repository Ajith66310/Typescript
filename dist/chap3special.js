"use strict";
// strict null check
// const  title : string = "ajith"
// title = undefined
const title = "ajith";
// void: function dosen't return a useful value 
function log(msg) {
    console.log(msg);
}
// never returns
function fail(msg) {
    throw new Error(msg);
}
// do not use any ->  try to ignore as much as possible
const valueAny = JSON.parse('{"Hi" : 6}');
valueAny.notThere.toFixed(2); //  this compiles but can break or explode at runtime 
