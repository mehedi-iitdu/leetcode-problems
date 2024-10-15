/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function(s) {
    let minStep = 0
    let whiteCount = 0

    for(let i = s.length - 1; i >= 0; i--){
        if(s[i] == '0'){
            whiteCount++
        }
        else{
            minStep += whiteCount
        }
    }

    return minStep
};