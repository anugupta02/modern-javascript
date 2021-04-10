function rotateArray(A, K) {
    if (!A.length) return A;
    let index = -1;
    while (++index < K) {
        A.unshift(A.pop());
        /* unshift() method adds one or more elements to the beginning of an array and returns
        the new length of the array.*/
    }
    return A;
}

console.log(rotateArray([3, 8, 9, 7, 6], 3));
