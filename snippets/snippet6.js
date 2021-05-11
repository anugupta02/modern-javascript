// let counter = 1;
// let copiedCounter = counter;

// copiedCounter = 2;
// console.log("counter",counter);

function removeDuplicateCharacters(string) {
    return string
        .split('')
        .filter(function(item, pos, self) {
            return self.indexOf(item) == pos;
        })
        .join('');
}
console.log(removeDuplicateCharacters('baraban'));

var x1 = "barabannna";
x1 = Array.from(new Set(x1.split(','))).toString();
console.log(x1);

getName();
var x=7
console.log(x)
function getName(){
    console.log("Javascript"); }


let strIndia= "I Love India"

//console.log(s.split("").reverse().join(""));

function remove(strIndia){
    let x='';
    for(let i=0;i<=strIndia.length;i++){
        let c = strIndia.charAt(i);
        if( c !== 'I' && c!=='n'){
            x = x  + c;
        }
    }console.log("x",x)
}

remove(strIndia);
