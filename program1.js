/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const matchingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (const char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};
};

module.exports = { isValid };


var isValid = function(s) {
    const stack = [];
    const matchingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (const char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};

module.exports = { isValid };
