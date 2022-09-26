/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let result = [0]
    
    for(let i = 1; i <=n; i++){
        let count = 0
        let num = i
        while(num){
            count = count + 1
            num = num & (num-1)
        }
        result.push(count)
    }
    
    return result
};