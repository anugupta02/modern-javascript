const demo = (numbers)=>{
    let expected = numbers[0],retNumbers=[];
    numbers.forEach(
        (current)=>{
            while(current>expected){
                retNumbers.push(expected);
                expected++
            }
            retNumbers.push(current);
            expected++;
        }
    );
    return retNumbers; }

// console.log(demo(
//     [1,2,4,5,8]
// ))

var a = [1,4,6,7,8];
var b = [2,3,5,9];

/* 1. The splice() method returns the removed item(s) in an array and slice()
method returns the selected element(s) in an array, as a new array object.

2. The splice() method changes the original array and slice() method doesn't change the
original array.
* */
b.forEach(function(value){
    var i = a.findIndex(function(oldvalue){return oldvalue>value;});
    i==-1 ? a.push(value) : a.splice(i,0,value);
});
console.log(a)
