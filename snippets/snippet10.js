function prime(num) {
    for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
}

console.log("number : ", prime(4))

function quickSortRecursive(arr, start, end) {
    // Base case or terminating case
    if (start >= end) { return; }

    // Returns pivotIndex
    let index = partition(arr, start, end);

    // Recursively apply the same logic to the left and right subarrays
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
}

array = [7, -2, 4, 1, 6, 5, 0, -4, 2]
quickSortRecursive(array, 0, array.length - 1)

console.log(array)
