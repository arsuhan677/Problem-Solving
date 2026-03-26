// Event loop -- Microtask vs Macrotask

console.log("Start");
setTimeout(() => console.log("settimeout"),0);
Promise.resolve().then(() => console.log("promis"));
console.log("end")