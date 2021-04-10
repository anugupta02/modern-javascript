const a = [1, 2, 3, 4, 5];

const [top,...bottom] = (function (a) {
    let result = a;

    a.unshift(new Array(3));

    return result;
})(a);

console.log(top.length + bottom.length);
