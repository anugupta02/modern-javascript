var array1 = [1,2,3,4,5];
var array2 = [6,7,8,9,10];
var array3 = [...array1,...array2];
console.log("mergeArray",array3)

function finalArray(fromArray, toArray) {
    for(let i = 0, len = fromArray.length; i < len; i++) {
        toArray.push(fromArray[i]);
    }
    return toArray;
}

var array1 = [1,2,3,4,5];
var array2= [6,7,8,9,10];
var array3 = [];
finalArray(array1, array3);
finalArray(array2, array3);

var array11 = [1,2,3,4,5];
var array12 = [6,7,8,9,10];
var array13 = []
array13.push(...array11,...array12);
//console.log("array13",array13)

var arr1 = [1,2,3,4,5]
var arr2 = [6,7,8,9,10];
var arr3 = Array.of(...array12,...array11);
 //console.log("arr3",arr3)

var string ="two";
var arrayOfChar = [...string];
console.log("arrayOfChar",arrayOfChar);

var arr1 = [1,1,2,3,4,5]
var arr2 = [6,7,8,8,9,10];

var arr3 = arr1.concat(arr2);
// or
var ar3 = [].concat(arr1, arr2);
 //console.log("arr3",arr3)
 //console.log("ar3",ar3)

var a = "string", b=1,c={};
let a1 = [1,1,2,3,4,5];
let b1 = [6,7,8,8,9,10]

//var combined = [].concat(a, b, c)
let combined = [].concat(a1, b1)
console.log("combined",combined.trim(" "));
