
type User = {
  id :  string;
  name : string;
  email? : string; // optional (could be absent) 
  readonly createdAt : Date // readonly cannot be reasigned
}

// user1.createdAt = new Date();

const user1 : User = { id: "1" , name : "ajith", createdAt : new Date()} 
const user2 : User = { id: "2" , name : "adith", createdAt : new Date(),email : "adith@gmail"}

type Count = {[k : string] : number}
const user : Count = {whaterver : 3}

type Count1 = Record<"likes" | "shares" | "sub" , number>
const ajith :Count1 = {likes:1,shares:2,sub:3}