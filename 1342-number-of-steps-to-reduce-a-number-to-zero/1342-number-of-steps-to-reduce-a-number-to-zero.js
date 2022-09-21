/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let steps = 0
    
    while(num > 0){
        num%2 === 0 ? num = Math.floor(num/2) : num = num -1
        steps++
    }
    
    return steps
};