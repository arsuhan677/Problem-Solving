function secondLargest(arr) {
  let largest = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      second = largest;
      largest = num;
    } else if (num > second && num !== largest) {
      second = num;
    }
  }
  return second;
}

console.log(secondLargest([10, 5, 20, 8]));
console.log(secondLargest([1, 2, 3, 5, 6]));
console.log(secondLargest([-5, -10, -3]));
console.log(secondLargest([7, 7, 7]));
