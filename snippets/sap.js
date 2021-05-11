var name1 = {
    firstName: "Abc",
    lastName: "Xyz"
};

function print(){
    // var json = JSON.stringify(this.name1)
  //  var obj = JSON.parse(json);
    const apiResponse = Object.keys(name1);
    console.log("apiResponse",apiResponse)
}

// function printName(){
//   return obj.firstName + " " + obj.lastName;
// }

//console.log("an",printName());

function firstRepeatingCharacter(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str.charAt(i)) !== str.lastIndexOf(str.charAt(i))) {
            return str.charAt(i)   }
    }
    return 'no results found'
}

console.log("firstRepeatingCharacter","This is a String")

//Define setTimeOut()
setTimeout(function () {})

    console.log(1);
setTimeout(function(){
       console.log(2);
},0);
Promise.resolve(3).then(function (num) {
       console.log(num);
});
console.log(4);

var str = "This is a string"

var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log(arr1.slice(-1));
console.log(arr2.slice(-1));
console.log(arr3);
console.log(arr3.slice(-1));
