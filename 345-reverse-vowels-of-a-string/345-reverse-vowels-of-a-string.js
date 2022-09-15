/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const str = s.split("")
    let left = 0
    let right = str.length - 1;
    const vowels = {
        'a': true,
        'e': true,
        'i': true,
        'o': true,
        'u': true,
        'A': true,
        'E': true,
        'I': true,
        'O': true,
        'U': true,
    }
    while(left < right){
        
        while(!(str[left] in vowels) && left < right) {
            left++;
        }
        
        while(!(str[right] in vowels) && left < right) {
            right--;
        }
        
        let temp = str[right]
        str[right] = str[left]
        str[left] = temp
        
        left++
        right--
        
    }
    return str.join("")
};