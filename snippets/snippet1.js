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
