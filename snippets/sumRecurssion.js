let sum= function(a){
    return function(b){
        if(b){
            return sum(a+b)
        }
        return a
    }
}


let sums = a1=>{
    return b1=>{
        return b1 ? sums(a1+b1):a1 ;
    }
}

console.log(sums(1)(2)(3)(4)())

let sums1 = a1=> b1=> b1 ? sums1(a1+b1):a1 ;

console.log(sums1(1)(2)(3)(4)())
