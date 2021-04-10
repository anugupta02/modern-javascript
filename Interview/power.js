let exponent = function(num, pow){
    if (pow === 0){
        return 1;
    }
    else{
        return num * exponent(num, pow-1);
    }
};

console.log(exponent(2, 3));
