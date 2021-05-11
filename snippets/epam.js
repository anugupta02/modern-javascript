var arr = [20, 120, 111, 215, 54, 78];
function secondMax(){
    // use int arrays
    var max = Math.max.apply(null, arr); // get the max of the array
    arr.splice(arr.indexOf(max), 1); // remove max from the array
    return Math.max.apply(null, arr); // get the 2nd max
}

console.log("secound largest",secondMax())

var array1 = [1,2,3]
var array2 = [2,3,4,5]
const filteredArray = array1.filter(value => array2.includes(value));
console.log("Intersection",filteredArray);
