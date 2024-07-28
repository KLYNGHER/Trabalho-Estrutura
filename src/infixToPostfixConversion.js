/**
 * Converts an infix expression to a postfix expression (Reverse Polish Notation).
 * @param {string} expression - The infix expression to convert.
 * @returns {string} The converted postfix expression.
 */
export function infixToPostfixConversion(expression) {
    const precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
      '^': 3,
    };
  
    const isOperator = (char) => ['+', '-', '*', '/', '^'].includes(char);
    const stack = [];
    let postfix = '';
  
    for (let char of expression) {
      if (/[a-zA-Z0-9]/.test(char)) {
        postfix += char;
      } else if (char === '(') {
        stack.push(char);
      } else if (char === ')') {
        while (stack.length > 0 && stack[stack.length - 1] !== '(') {
          postfix += stack.pop();
        }
        stack.pop();
      } else if (isOperator(char)) {
        while (stack.length > 0 && precedence[stack[stack.length - 1]] >= precedence[char]) {
          postfix += stack.pop();
        }
        stack.push(char);
      }
    }
  
    while (stack.length > 0) {
      postfix += stack.pop();
    }
  
    return postfix;
  }
  