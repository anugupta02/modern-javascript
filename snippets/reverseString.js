function reverseString(str) {
    var newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

let str= "Akash"
console.log(reverseString(str))

let concalStr = s.concat(str);
console.log("concalStr",concalStr)
