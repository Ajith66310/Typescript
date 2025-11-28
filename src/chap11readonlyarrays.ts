const xss = [1,2,3]
const ys : readonly number[] = [1,2,3,4]
const yss: ReadonlyArray<number> = [1,2,3,4]

xss[0] = 9 //mutable
//yss.push(4)
// yss.splice(0,2)

function sum(nums : readonly number[]) :number {
let s = 0;
for(const n of nums){
s+=n
}
return s; 
}

console.log(sum(xss)); //passing mutable array in readonly params is allowed


