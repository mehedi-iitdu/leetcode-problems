/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let positionOfC = []
    
    for(let i=0; i < s.length; i++){
        if(s[i] === c){
            positionOfC.push(i)
        }
    }
    
    let result = []
    
    for(let i=0; i < s.length; i++){
        result.push(Math.min(...positionOfC.map((p) => Math.abs(p-i))))
    }
    
    return result
};