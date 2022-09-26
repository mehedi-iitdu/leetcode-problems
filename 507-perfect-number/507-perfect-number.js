/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let sum = 0
    let n = 1
    
    while(n <= num/2){
        if(num%n === 0) sum+= n
        n++
    }
    
    return sum === num
};