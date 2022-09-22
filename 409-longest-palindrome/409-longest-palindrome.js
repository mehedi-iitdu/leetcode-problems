/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let chars = new Map()
    
    for(let i = 0; i < s.length; i++){
        s[i] in chars ? chars[s[i]]++ : chars[s[i]] = 1
    }
    
    let maxLength = 0
    let oddCharAdded = false
    
    for(let item in chars){
        if(chars[item] % 2 === 0) maxLength += chars[item]
        else {
            if(!oddCharAdded) {
                maxLength += chars[item]
                oddCharAdded = true
            }
            else maxLength += Math.floor(chars[item] - 1)
        }
    }
    
    return maxLength
};