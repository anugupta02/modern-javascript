function brackets(expression) {
    let stack = [];
    let current;
    const matchLookup = {
        "(": ")",
        "[": "]",
        "{": "}",
    };

    for (let i = 0; i < expression.length; i++) {
        current = expression[i]; //easier than writing it over and over

        if (current === '(' || current === '[' || current === "{") {
            stack.push(current);

        } else if (current === ')' || current === ']' || current === "}") {
            const lastBracket = stack.pop();

            if (matchLookup[lastBracket] !== current) { //if the stack is empty, .pop() returns undefined, so this expression is still correct

                return false; //terminate immediately - no need to continue scanning the string
            }
        }
    }

    return stack.length === 0; //any elements mean brackets left open
}

console.log(brackets('(3+{1-1)}')); // false
console.log(brackets('{[(3+1)+2]+}')); //true
console.log(brackets('[1+1]+(2*2)-{3/3}')); //true
console.log(brackets('(({[(((1)-2)+3)-3]/3}-3)')); //false
