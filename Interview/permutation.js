const permutator = (inputArr) => {
    let result = [];

    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m)
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next))
            }
        }
    }

    permute(inputArr)

    return result;
}

console.log(permutator([3,4,5]));


// function perms(input) {
//     var data = input.slice();
//     var permutations = [];
//     var n = data.length;
//
//     if (n === 0) {
//         return [
//             []
//         ];
//     } else {
//         var first = data.shift();
//         var words = perms(data);
//         words.forEach(function(word) {
//             for (var i = 0; i < n; ++i) {
//                 var tmp = word.slice();
//                 tmp.splice(i, 0, first)
//                 permutations.push(tmp);
//             }
//         });
//     }
//
//     return permutations;
// }
//
// var str = '11121';
// var chars = str.split('');
// var result = perms(chars).map(function(p) {
//     return p.join('');
// });
//
// console.log(result);
