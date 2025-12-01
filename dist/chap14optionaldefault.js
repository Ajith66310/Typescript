"use strict";
function greetPersonOptional(name) {
    const userName = name ? name?.toUpperCase() : "Guest";
    return `name : ${userName}`;
}
console.log(greetPersonOptional("Ajith"));
console.log(greetPersonOptional());
function defaultValue(name = "default") {
    return name.toUpperCase();
}
console.log(defaultValue("ajith"));
console.log(defaultValue());
function connect(host, port, secure) {
    const p = port ?? 80;
    const s = secure ?? true;
    return `connect ${host} , ${p} , ${s}`;
}
connect("ajith");
