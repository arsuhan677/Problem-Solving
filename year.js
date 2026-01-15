function isYearLeap(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

const isYear = isYearLeap(2043);
const isYear1 = isYearLeap(2052);

console.log(isYear);
console.log(isYear1);
