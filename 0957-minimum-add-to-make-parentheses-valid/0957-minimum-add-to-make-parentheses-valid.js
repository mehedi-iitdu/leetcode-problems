/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let stack = [s[0]]

    for(let i = 1; i < s.length; i++){
        let element = stack.pop()
        if(element  == '(' && s[i] == ')'){
            continue
        }
        else{
            element ? stack.push(element) : null
            stack.push(s[i])
        }

        console.log(stack)
    }

    return stack.length
};