function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

const input = "runima namhar nahus";
const output = reverseWords(input);
console.log(output);
