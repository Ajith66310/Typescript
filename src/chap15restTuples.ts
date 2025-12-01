

const allNumbbers = (...xs : number[]):number =>{
 return xs.reduce((s,n)=> s + n , 0)
}

allNumbbers(1,2,3,4)


// tuple rest 

function makeRange(...args : [start : number , end : number , step ? : number]) : number []{
  const [start , end , step = 1 ] = args;

  const out : number[]  = [];

  for(let n = start ; n <= end ; n += step) out.push() 
    return out;
}

console.log(makeRange(1,5));


function draw ( x: number , y : number){
  console.log(x,y);
}

// const points  = [10,20]
// draw(...points); must be fixed
const points = [10,20] as const;

draw(...points) 

