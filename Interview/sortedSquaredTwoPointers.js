const sortedSquares = (A) => {
    let result = [] //empty array to push new value
    let start = 0 //beginning index of the array
    let end = A.length - 1 // end index of the array
    let position = end //the position in result array of new value

    while (start <= end) { //start point can't be smaller than end point
        if (A[start] ** 2 > A[end] ** 2) { //if squared start index value is
            //greater than end index value
            result[position--] = A[start++] ** 2 //put it from the end of the result array
        } else {// if squared end value is greater
            //or equal to the start value
            result[position--] = A[end--] ** 2  //put it from the end of the result array
        }
    }

    return result //return transformed sorted new array
};
