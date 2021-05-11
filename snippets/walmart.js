//Walmart Output Based Questions:

let sum = function(a){
    return function(b){
        if(b){
            return sum(a+b);
        }
        return a;
    }
}
console.log(sum(1)(2)(4)());

let sums = a => b => b ? sums(a+b):a;

console.log(sums(1)(2)(4)(5)());

var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
];

var arr = []
//officers.forEach((o)=> arr.push(Object.values(o)[0]))

for(let values of officers){
    arr.push(values.id);
}
console.log(arr);

// function val(){
//   var a = []
//   for(var i = 0 ; i< officers.length; i++){
//     var values  = Object.values(officers[i]);
//       var val1 = values[0]
//       a.push(val1)
//   }
//   console.log(a);
//   }

//val();
