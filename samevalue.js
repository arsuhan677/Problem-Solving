<<<<<<< HEAD
  const students = ['abul'];
=======
  const students = ['abul', 'babul', 'cabul', 'suhan', 'suhan', 'abul', 'babul'];
>>>>>>> 836bf983a2beee3f89000bc1a3a518c0108597f3
  const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];

  function noDuplicate(array) {
    const unique = [ ];
    for (const item of array) {
      if (unique.includes(item) === false) {
        unique.push(item);
      }
    }
    return unique;
  }

  const uniqueArray = noDuplicate(students);
  console.log(uniqueArray);
