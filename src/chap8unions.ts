
//value -> this or that
function printId(id: string | number) {
  // id.toUpperCase()
  if (typeof id === 'string') {
    id.toUpperCase()
  } else {
    id.toFixed(2)
  }
}

//object union

type Admin = { role: 'admin', permissions: string[] }
type Customer = { role: 'Customer', loyaltyPoints: number }

function describeUser(u: Admin | Customer) {
  if (u.role === 'admin') {
    console.log(u.permissions);
  } else {

  }
}

function describeUserWithInOperator(u: Admin | Customer) {
  if ('permissions' in u) {
    console.log(u.permissions);
  } else {

    console.log(u.loyaltyPoints);
  }
}

//array of union & union of array
const arrofUnion : (string | number)[] = ['a',1,'b',2]

arrofUnion.push("2")
arrofUnion.push(2)

const unionOfArrays: string[] | number[] = Math.random() > 0.1 ? ["a","b"] : [1,2]
// unionOfArrays.push("d")
