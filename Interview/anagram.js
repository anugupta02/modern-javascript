var firstWord = "Anu";
var secondWord = "Gupta";

var finalStr = firstWord +' ' + secondWord;
console.log("finalStr",finalStr)
let count = finalStr.split("u").length-1
let co = (finalStr.match(/u/g)||[]).length;
console.log("co",co)
console.log("count",count)
console.log(isAnagram(firstWord, secondWord)); // true

function isAnagram(first, second) {
    // For case insensitivity, change both words to lowercase.
    var a = first.toLowerCase();
    var b = second.toLowerCase();

    // Sort the strings, and join the resulting array to a string. Compare the results
    a = a.split("").sort().join("");
    b = b.split("").sort().join("");

    return a === b;
}
