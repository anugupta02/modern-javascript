// var arr = ['yt7ui', 'c1', 'd2y', 't18ry', 'd23r', '2t1y', 'i2rt'];
//
// const x = [];
// arr.forEach(item=> x.push(parseInt(item.replace(/[^0-9]/g,''))));
//
// console.log(x);

// var str = 'i am angular developer';
// var str1 = '';
// var arr = str.split(' ')
//  for(var i=0; i<arr.length;i++){
//      str1 +=  arr[i].split('').reverse().join('') + ' ';
// }
//
// console.log("str",str1);

var arr = [0, 14, 0, 4, 7, 8, 3, 5, 7] ;

function sum(arr,target){
    var map = {}; var result=[];
    for(var i=0;i<arr.length;i++){
        if(map[arr[i]]){
            result.push([target - arr[i],arr[i]]);
        }
      map[target-arr[i]] = true
    }
    return result;
}

console.log("sum", sum([11, 14, 0, 4, 7, 8, 3, 5, 7],11))
