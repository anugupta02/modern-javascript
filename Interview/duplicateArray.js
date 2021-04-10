var arr = [1,1,2,3,4,5]
var uniqueArr = arr.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
})
/*self refers to the global scope - If the context is a window it will refer to window. self,
 while in case of a non-windowed context it will refer to the global scope of that context
(e.g. in service worker code, self refers to the worker global scope). self refers to the global scope of a context: window context */

console.log("uniqueArr",uniqueArr)

function removeDuplicate(arr){
    let unique = [];
    arr.forEach(e=>{
        if(!unique.includes(e)){
            unique.push(e);
        }
    });
    return unique;
}

console.log(removeDuplicate(arr))

var obj = JSON.parse('{ "name":"Anu"}');
console.log(obj.name.length);

