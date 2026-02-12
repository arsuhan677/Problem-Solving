const arr = [1, 2, 4, 3, 4, 5];
const remove = 4;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === remove) {
    arr.splice(i, 1);
    break;
  }
}
console.log(arr);
