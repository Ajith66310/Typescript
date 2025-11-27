type direction = "left" | "right" | "top" ; 

function direct (d : direction){
  console.log(d);
}

const d = "left" // TS keeps literals type "left"
direct(d)

let d1 = "left" // TS widens to string 
// direct(d1)
let d2 : direction = "left"
direct(d2)