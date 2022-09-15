/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    allowed = allowed.split('')
    
    let count = 0
    
    for(let i = 0; i < words.length; i++) {
        let isAllowed = true
        for(let j = 0; j < words[i].length; j++){
            if(allowed.indexOf(words[i][j]) < 0){
                isAllowed = false
            }
        }
        if(isAllowed) {
            count++
        }
    }
    
    return count
};