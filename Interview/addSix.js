/* function createBase even after the inner function is returned.
The inner function that is being returned is created within an outer function, making it a closure,
and it has access to the variables within the outer function, in this case the variable baseNumber */

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21);

function createBase(baseNumber) {
    return function(N) {
        // we are referencing baseNumber here even though it was declared
        // outside of this function. Closures allow us to do this in JavaScript
        return baseNumber + N;
    }
}

var addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21))
