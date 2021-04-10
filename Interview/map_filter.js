let sample = [1, 2, 3] // Filter

// es6
let result1 = sample.filter(elem => elem !== 2)
console.log(result1)

//MAP
var mapped = sample.map(function(elem) {
    return elem * 10;
})
console.log(mapped);
// es6
let mapped1 = sample.map(elem => elem * 10)
console.log(mapped1);


/* REDUCE : reduce() method applies a function simultaneously against two
values of the array (from left-to-right) as to reduce it to a single value.
 */
let sum = sample.reduce((sum, elem) => sum + elem)
console.log("reduce",sum)
