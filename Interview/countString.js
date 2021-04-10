// program to check the number of occurrence of a character
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
 console.log(result);

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
console.log(results);
