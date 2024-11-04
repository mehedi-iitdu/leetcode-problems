/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    let result = ""
    let prev = word[0]
    let count  = 1

    for(let i = 1; i < word.length; i++){
        if(prev === word[i]){
            if(count === 9){
                result = result + count + prev
                count = 1
            }
            else{
                count++
            }
        }
        else{
            result = result + count + prev
            prev = word[i]
            count = 1
        }
    }

    return result + count + prev
};