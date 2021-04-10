var arr1 = "john".split('');
console.log(arr1);
var arr2 = arr1.reverse();
console.log(arr2);
var arr3 = "jones".split('');
console.log(arr2.push(arr3));
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

class Dictionary {
    constructor(arr) {
        this.dict = [];
        arr.forEach((word)=>{
            const code = this.encode(word);
            this.dict[code] = 1;
        });
    }
    encode(word) {
        return word.split('').map(char=>char.charCodeAt(0)).join('000');
    }
    hasWord(word) {
        const code = this.encode(word);
        return !!this.dict[code];
    }
}
