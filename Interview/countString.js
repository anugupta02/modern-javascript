
// program to check the number of occurrence of a character

let string1="Anu Gupta"
let str = string1.toLowerCase().split(" ").join("");
console.log(str)
function count(string1){
    const count = {};
    string1.split('').forEach(char=>{
        count[char] = count[char]? (count[char]+1) : 1;
    })
    return count
}

console.log(count(str));

function countString(str, letter) {
    let count = 0;
     for (let i = 0; i < str.length; i++) {
        // check if the character is at that position
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}

const string = "Anu Gupta";
const letterToCheck = "u";
const result = countString(string, letterToCheck);
//console.log(result);

//--------------------------------------------------------------------------------------

function countStrings(string, letters) {
    // creating regex
    const re = new RegExp(letters, 'g');
 // matching the pattern
    const counts = string.match(re).length;
  return counts;
}

const strings =  "Anu Gupta";
const letterToChecks = "a";

//passing parameters and calling the function
const results = countStrings(strings, letterToChecks);
//console.log(results);

var temp = "This is a string.";
var count = (temp.match(/is/g) || []).length;
//console.log(count);

