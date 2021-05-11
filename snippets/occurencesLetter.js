// let str = 'aaaadfdfglklkkkhdfhaaghgieuuk';
// let substr = 'a';

// let count = 0;

// let index = str.indexOf(substr);
// while(index !== -1) {
//     count++;
//     index = str.indexOf(substr, index + 1);
// }

// console.log(count);


// var myString = "aaaadfdfglklkkkhdfhaaghgieuuk";
//         var foundAtPosition = 0;
//         var Count = 0;
//         while (foundAtPosition != -1)
//         {
//             foundAtPosition = myString.indexOf("a",foundAtPosition);
//             if (foundAtPosition != -1)
//             {
//                 Count++;
//                 foundAtPosition++;
//             }
//         }
//         console.log("There are " + Count + " occurrences of the word a");

var temp = "aaaadfdfglklkkkhdfhaaghgieuuk";
var counts = (temp.split('a').length - 1);
console.log("counts",counts);

var result = [...temp].reduce((res, char) => (res[char] = (res[char] || 0) + 1, res), {})
//console.log(result)

let obj ={};
for(let s of temp)if(!obj[s])obj[s] = 1;else obj[s] = obj[s]  + 1;
console.log(obj);

let string ="aaaadfdfglklkkkhdfhaaghgieuuk";

function countString(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}

function countStrings(str, letter) {
    const re = new RegExp(letter, 'g');
    const count = str.match(re).length;
    return count;
}

console.log(countStrings("aaaadfdfglklkkkhdfhaaghgieuuk", "a"));

console.log(countString("aaaadfdfglklkkkhdfhaaghgieuuk", "h"));
