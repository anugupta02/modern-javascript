let num = 123;
var digits = [...num+''].map(n=>+n);

console.log("digits",digits)

let number = 123;
var digit = number.toString().split('');
var realDigits = digit.map(Number)
console.log(realDigits);
//console.log("sum",realDigits[0]+realDigits[1]+realDigits[3])
