let fibonacci = [0, 1];

function listFibonacci(num) {
    for (let i = 2; i < num; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
}
console.log(listFibonacci(6));
