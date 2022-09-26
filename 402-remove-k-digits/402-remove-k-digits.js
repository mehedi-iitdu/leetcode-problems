/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let stack = []
    
    for(let i = 0; i < num.length; i++){
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] > num[i]){
            stack.pop()
            k--
        }
        stack.push(num[i])
    }
    
    // remove remaining k digits
    for(let i = 0; i < k; i++){
        stack.pop()
    }
    
    //remove leading 0
    while(stack[0] == "0"){
        stack.shift()
    }
    
    console.log(stack)
    
    return stack.length > 0 ? stack.join('') : "0"
};