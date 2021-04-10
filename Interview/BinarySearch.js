/*
1. Binary Search
2. In Array find out missing repeating element
3. LinkedList loop finding out
4. Single LinkedList
5. Local minima
*/

let list = [1, 3, 4, 5, 8, 10, 15, 18, 20, 21, 22];
let val = 15;

function binarySearch(value, list) {
    let first = 0;    //left endpoint
    let last = list.length - 1;   //right endpoint
    let position = -1;
    let found = false;
    let middle;

    while (found === false && first <= last) {
        middle = Math.floor((first + last)/2);
        if (list[middle] == value) {
            found = true;
            position = middle;
        } else if (list[middle] > value) {  //if in lower half
            last = middle - 1;
        } else {  //in in upper half
            first = middle + 1;
        }
    }
    return position;
}

console.log(binarySearch(22,[1, 3, 4, 5, 8, 10, 15, 18, 20, 21, 22]))
