var a1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
var a2 = ['a', 'b', 'c', 'd'];

let missing = a1.filter(item => a2.indexOf(item) < 0);
console.log(missing);

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [1, 2, 3, 4, 6];

let json = JSON.stringify(arr1);
console.log('json',typeof json)
if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    console.log('They are equal!');
}
else{
    console.log('They are not equal!')
}
