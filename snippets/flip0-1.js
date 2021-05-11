var A = Array(1, 0, 1, 0, 0, 1, 0, 1);
var sum = 0;

// count the 1s in the original array and
// do the 0 -> 1 and 1 -> -1 conversion
for(var i = 0; i < A.length; i++) {
    sum += A[i];
    A[i] = A[i] == 0 ? 1 : -1;
}

// find the maximum subarray
var x = { value: 0, left: 0, right: 0 };
var y = { value: 0, left: 0 };
for (var n = 0; n < A.length; n++) {
    // update y
    if (y.value + A[n] >= 0) {
        y.value += A[n];
    } else {
        y.left = n+1;
        y.value = 0;
    }
    // update x
    if (x.value < y.value) {
        x.left = y.left;
        x.right = n;
        x.value = y.value;
    }
}

// convert the result back
console.log("result = " + (sum + x.value)
    + " in range [" + x.left + ", " + x.right + "]");
