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


// Shuffle Random Array

var array = [2,3,4,5];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log("shuffleArray",shuffleArray(["a", "b", "c", "d"]))

let unshuffled = ['hello', 'a', 't', 'q', 1, 2, 3, {cats: true}]
let shuffled = unshuffled
  .map((a) => ({sort: Math.random(), value: a}))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value)

  console.log(shuffled)