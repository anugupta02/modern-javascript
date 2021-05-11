var getArray2d = function(a, x, y) {
    return a[y][x];
};

//Interchange whole column to row
var arr = [ [9, 8, 7, 6],
    [4, 7, 6, 5],
    [3, 2, 1, 8],
    [9, 9, 7, 7] ];

var newarr = [];
arr[0].forEach(() => newarr.push(new Array(arr.length)));

for (var i = 0; i < newarr.length; i++) {
    for (var j = 0; j < newarr[0].length; j++) {
        newarr[i][j] = getArray2d(arr, i, j);
    }
}

console.log(newarr);

//Reverse each row of the matrix
var array = [ [ 9, 4, 3, 9 ],
    [ 8, 7, 2, 9 ],
    [ 7, 6, 1, 7 ], [ 6, 5, 8, 7 ]  ];

function getArray2dCW(a, k, l) {
    var t = k;
    k = l;
    l = a.length - t - 1;
    return a[l][k];
}

var newArr = [];
array[0].forEach(() => newArr.push(new Array(array.length)));

for (var x = 0; x < newArr[0].length; x++) {
    for (var y = 0; y < newArr.length; y++) {
        newArr[y][x] = getArray2dCW(arr, x, y);
    }
}

console.log(newArr);
