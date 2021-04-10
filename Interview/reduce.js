const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array1.reduce(reducer)); //10

console.log(array1.reduce(reducer, 5)); // 15


const test = {
    prop: 42,
    func: function() {
        return this.prop;
    },
};

console.log(test.func());
