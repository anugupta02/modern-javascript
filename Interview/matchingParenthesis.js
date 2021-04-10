let isMatchingBrackets = function (str) {
  let stack = [];
  let map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  for (let i = 0; i < str.length; i++) {

    // If character is an opening brace add it to a stack
    if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
      stack.push(str[i]);
    }
    //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
    else {
      let last = stack.pop();

      //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
      if (str[i] !== map[last]) {return false};
    }
  }
  // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
  if (stack.length !== 0) {return false};

  return true;
}

console.log(isMatchingBrackets("(){}]")); // returns false
console.log(isMatchingBrackets("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]")); // returns true
console.log(isMatchingBrackets("({(()))}}"));  // returns false


/* Algorithm Steps:
1. Declare a character stack which will hold an array of all the opening parenthesis.
2. Now traverse the expression string exp.
3. If the current character is a starting bracket (‘(‘ or ‘{‘ or ‘[‘) then push it to stack.
4. If the current character is a closing bracket (‘)’ or ‘}’ or ‘]’) then pop from stack and if the popped character is the matching starting bracket then fine else parenthesis are not balanced.
5. After complete traversal, if there is some starting bracket left in stack then “not balanced”
*/
