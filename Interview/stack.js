var inputStack = [];
var outputStack = [];

// For enqueue, just push the item into the first stack
let enque = function enqueue(stackInput, item) {
    return stackInput.push(item);
}

let deque = function dequeue(stackInput, stackOutput) {
    // Reverse the stack such that the first element of the output stack is the
    // last element of the input stack. After that, pop the top of the output to
    // get the first element that was ever pushed into the input stack
    if (stackOutput.length <= 0) {
        while(stackInput.length > 0) {
            var elementToOutput = stackInput.pop();
            stackOutput.push(elementToOutput);
        }
    }    return stackOutput.pop();
}

console.log("deque",deque)
console.log("enque",enque)
