// tuples -> fixed length fixed types

const userEntry : [string , number] = ["a",6];

type responseRaw = [status : number , message ? : string]

const r11 : responseRaw = [6,'hehe']

const corners : readonly [number,number] = [0,0]

