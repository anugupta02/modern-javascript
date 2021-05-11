const arrAnu = [1,2,3,4]

arrAnu.push(5)
console.log("arrAnu",arrAnu)


var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('I promise to return this after 1 second!');
    }, 1000);
});
promise.then(function(value) {
    console.log(value);
});
