
// strict null check
// const  title : string = "ajith"
// title = undefined
const title : string | undefined = "ajith"

// void: function dosen't return a useful value 
function log(msg : string) :void {
  console.log(msg);
}


// never returns
function fail(msg : string) :never {
 throw new Error(msg)
}

// do not use any ->  try to ignore as much as possible
const valueAny : any = JSON.parse('{"Hi" : 6}')
valueAny.notThere.toFixed(2)  //  this compiles but can break or explode at runtime 