function isPalindrome(str) {
    str = str.replace(/\W/g, '');
    return (str == str.split('').reverse().join(''));
}

console.log(isPalindrome("level"));
console.log(isPalindrome("levels"));
console.log(isPalindrome("LEVEL"));
console.log(isPalindrome("A car, a man, a maraca"));


function sum(x, y) {
    if (y !== undefined) {
        return x + y;
    } else {
        return function(y) { return x + y; };
    }
}

console.log("sum1",sum(2)(3));
console.log(sum(2,3));
