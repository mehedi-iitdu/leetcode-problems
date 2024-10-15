/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let stack = []
    for (let parenthesis of s) {
         if (stack[stack.length - 1] === "(" && parenthesis === ")") {
            stack.pop()
        } else {
            stack.push(parenthesis)
        }
    }
    return stack.length
};