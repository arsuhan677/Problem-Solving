function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

module.exports = {
  add,
  sub,
};

// index.js

const math = require("./math");

console.log(math.add(10, 5)); // 15
console.log(math.sub(10, 5)); // 5
