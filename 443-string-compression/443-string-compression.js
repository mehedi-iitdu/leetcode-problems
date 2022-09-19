/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let i = 0;
    
    for (let j = 0; j < chars.length; j++) {
        const currentChar = chars[j];
        let count = 0;
        while (chars[j] === currentChar) {
            j++;
            count++
        }
        
        if (count === 1) {
            chars[i] = currentChar;
            i++
        }
        else {
            const toAdd = (currentChar + count.toString()).split('');
            while (toAdd.length) {
                chars[i] = toAdd.shift()
                i++
            }
        }
        
        j--;
    }
    
    return i;
};