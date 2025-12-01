function func1(a: number, b: number ): number{
  return a+ b;
}

const nums12 = [1,2,3] 
const doubled = nums12.map(n => n* 2)
console.log(doubled);

type Point = {x: number,y: number}
function distanceFromOrgin(p: Point):number{
  return Math.hypot(p.x,p.y)
} 
distanceFromOrgin({x:30,y:20 })