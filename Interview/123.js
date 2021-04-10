let num = 1234;

var digits = [...num+''].map(n=>+n);

let sums = digits.reduce((a, b) => a + b, 0);
console.log("sums",sums)
