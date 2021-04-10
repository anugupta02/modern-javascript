
// let finalArray = [([] + 1),([] + 2),([] + 3),([] + 4),([] + 5),([] + 6),([] + 7)]
// //console.log("finalArray",finalArray)


function extract( array, newarray ){
    if( !newarray ) newarray = [] ;
    if( array ) for( let i = 0 ; i < array.length ; ++i ) {
        if( array[i].constructor.name === "Array" ) extract( array[i], newarray ) ;
        else newarray.push( array[i] ) ;
    }
    return newarray ;
}
let array = [1, [2, [3, 4]], 5, [6, 7],[[8,9,10]],11];
let newArr = extract(array);
console.log("newArray : ",newArr) ;
