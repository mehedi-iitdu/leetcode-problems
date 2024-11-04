/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    let result = ""
    let currentCharacter = word[0]
    let count  = 1

    for(let i = 1; i < word.length; i++){
        if(word[i] === currentCharacter ){
            if(count === 9){
                result = result + count + currentCharacter
                count = 1
            }
            else{
                count++
            }
        }
        else{
            result = result + count + currentCharacter
            currentCharacter = word[i]
            count = 1
        }
    }

    return result + count + currentCharacter
};