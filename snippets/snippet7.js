let num = 1234;

var digits = [...num+''].map(n=>+n);

let sums = digits.reduce((a, b) => a + b, 0);
console.log("sums",sums)

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

countOccurrences([2, 1, 3, 3, 2, 3], 2);                // 2
 //countOccurrences(['a', 'b', 'a', 'c', 'a', 'b'], 'a');  // 3

 const numbers = [1, 2, [3, 4, 5]];
const flatNumbers = numbers.flat();

console.log(flatNumbers);


