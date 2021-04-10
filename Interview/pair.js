var countries = ["India", "USA", "Japan", "Russia"];
var states = new Array("Rajasthan", "Delhi", "Mumbai", "Assam");
console.log("states",states[1]);

console.log(states.length);
states[0] = "Uttar Pradesh";
console.log(states);

var user = ["anu", "anu@gmail.com", 3, 22, true];
console.log("user",user);

user.pop();
user.pop();
console.log("user1",user);
user.unshift("NEW VALUE");
console.log("Unshift Value",user);
user.shift();
console.log("shift",user);

console.log(user.indexOf(3));

console.log(Array.from("anu"));

var a = ["a", "b", "c"];
a.forEach(function(entry) {
    // console.log(entry);
});

arrays = ["example1", "example2", "example3"];

printArray = [1,2,6,3,21,8,25];
printArray.forEach(function (ent){
    console.log("arr",ent);
})
//for (i = 0; i < array.length; i++)
// console.log((i+1) + ": " + array[i]);

/* finding out a Pair of Values while passing any value in a function */

let getPair = (arr,total) => {
    let x = new Set(arr);
    for(let i = 0 ;i < arr.length; i++) {
        if(x.has(total-arr[i])){
            return [arr[i], total-arr[i]]
        }
    }  return [];
}

console.log(getPair([1,2,6,3,21,8,25],7));

let twoSum = (array, sum) => {
    let hashMap = {},results = []
    for (let i = 0; i < array.length; i++){
        if (hashMap[array[i]]){
            results.push([hashMap[array[i]], array[i]])
        }else{
            hashMap[sum - array[i]] = array[i];
        }
    }
    return results;
}
console.log(twoSum( [2, 5, 10, 12, 7, 9, 13],25));
