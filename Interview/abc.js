(function (a, b, c) {
    arguments[2] = (typeof arguments).length;
    c > 10 ? console.log(c) : console.log(++c);
})(1, 2, 3);
