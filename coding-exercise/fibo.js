function prime(num) {
    if (num < 2) return false;

    for (let k = 2; k < num; k++) {
        if (num % k == 0) {
            return false;
        }
    }
    return true;
}

console.log("Prime",prime(2))

const isPrime = n => ![...Array(n).keys()].slice(2).map(i => !(n%i)).includes(true) && ![0,1].includes(n)
//console.log("isPrime",isPrime)

var s1 = "Fpred";
var s2 = "Freid";

console.log(anagram(s1, s2));

function anagram(first, second) {
    var a = first.toLowerCase();
    var b = second.toLowerCase();

    a = a.split("").sort().join("");
    b = b.split("").sort().join("");

    return a === b;
}

let n1 = 0, n2 = 1, nextTerm,number=6;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
