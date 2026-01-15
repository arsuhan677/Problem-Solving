export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// index.js

import { add, sub } from "./math.mjs";

console.log(add(20, 10)); 
console.log(sub(20, 10));
