

function greetPersonOptional(name?: string): string {
  const userName = name ? name?.toUpperCase() : "Guest";
  return `name : ${userName}`
}
console.log(greetPersonOptional("Ajith"));
console.log(greetPersonOptional());


function defaultValue(name: string = "default"): string {
  return name.toUpperCase();
}
console.log(defaultValue("ajith"));
console.log(defaultValue());

function connect(host: string, port ? : number, secure ? : boolean) {
const p  = port ?? 80 ;
const s = secure ?? true;  
return `connect ${host} , ${p} , ${s}`
}
connect("ajith");