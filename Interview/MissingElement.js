// let numArray = [59, 60, 61, 63, 65];
// let anu= [];
//
// for(var i = 1; i < numArray.length; i++)
// {
//     if(numArray[i] - numArray[i-1] != 1) {
//         var x = numArray[i] - numArray[i-1];
//         var j = 1;
//         while (j<x) {
//             anu.push(numArray[i-1]+j);
//             j++;
//         }
//     }
// }
// console.log("anu's missing element",anu)


var a = [2,5,9],
    count = 9;
var missing = new Array();

for (var i = 1; i <= count; i++) {
    if (a.indexOf(i) == -1) {
        missing.push(i);
    }
}
console.log("missing",missing);


let arr1=[2,5,9]
let missingNumbers = (a) => Array.from(Array(Math.max(...a)).keys()).map((n, i) => a.indexOf(i) < 0? i : null).filter(f=>f);

console.log("missingNumbers",missingNumbers(arr1))
