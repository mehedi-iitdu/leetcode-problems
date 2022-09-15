/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    const arr = [] 
    for (let i = 0; i < s.length; i++) {
        if (arr.indexOf(s[i]) >= 0) {
            return s[i]
        }
        else {
            arr.push(s[i])
        }
    }
};