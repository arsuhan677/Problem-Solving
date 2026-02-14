found = false;
let arr = [1, 2, 4];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 4) {
    found = true;
    break;
  }
}
console.log(found);
