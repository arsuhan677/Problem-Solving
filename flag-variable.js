let found = false;
let arr = [1, 2, 5]; // others ( false )

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 2) {
    found = true;
    break;
  }
}

console.log(found); // true
