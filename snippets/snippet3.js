function binarySearch(array, element){
    let start = 0;
    let end = array.length - 1;
    let middle = Math.floor(array.length / 2);
    if (end < start) return -1;
    return array[middle] === element ? middle
        : array[middle] < element
            ? this.binarySearch(array.slice(start, middle - 1), element)
            : this.binarySearch(array.slice(middle + 1, end), element);
}
console.log(binarySearch([1, 3, 4, 5, 8, 10, 15, 18, 20, 21, 22],10))
