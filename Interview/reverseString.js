var string = "Welcome to this Javascript Guide!";

var reverseEntireSentence = reverseBySeparator(string, "");
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseStr(s){
    return s.split("").reverse().join("");
}

console.log(reverseStr("Anu"));

function reverseBySeparator(string, separator) {
    return string.split(separator).reverse().join(separator);
}

function reverseString(str) {
    var newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString("hello"));

function reverseStr1(str) {
    if (str === "") // This is the terminal case that will end the recursion
        return "";

    else
        return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseStr1("howdy"));

function reverseInPlace(str) {
    var words = [];
    words = str.match(/\S+/g);
    var result = "";
    for (var i = 0; i < words.length; i++) {
        result += words[i].split('').reverse().join('') + " ";
    }
    return result
}
console.log(reverseInPlace("abd fhe kdj"))

