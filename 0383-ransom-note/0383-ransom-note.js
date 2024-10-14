/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let charCount = {}

    for(let i = 0; i < magazine.length; i++){
        if(charCount[magazine[i]]){
            charCount[magazine[i]] = charCount[magazine[i]] + 1
        }
        else{
            charCount[magazine[i]] = 1
        }
    }

     for(let i = 0; i < ransomNote.length; i++){
        if(!charCount[ransomNote[i]] || charCount[ransomNote[i]] == 0) return false
        charCount[ransomNote[i]] = charCount[ransomNote[i]] - 1
     }

     return true
};