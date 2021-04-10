var a1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
var a2 = ['a', 'b', 'c', 'd'];

let missing = a1.filter(item => a2.indexOf(item) < 0);
console.log(missing);
