// value must be everything from A and from b
type inter1 = {id : string}
type inter2 = {createdAt : Date}

type Entity = inter1 & inter2 ; //must have both id & createdAt

const e:Entity = {id : "ajith",createdAt: new Date()}


type inter3 = { a: string}
type inter4 = { a: number}
type bothmerge = inter3 & inter4;
// const merged : bothmerge = {a : 'ajith ', a: 5}