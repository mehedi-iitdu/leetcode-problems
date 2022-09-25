/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let result = 0
    
    while(n){
        result = result + 1
        n = n & (n-1)
    }
    
    return result
};