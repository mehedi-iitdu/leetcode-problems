/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let isValid = function(s, left, right){
        while(left < right){
            if(s[left] == s[right]){
                left++
                right--
            }
            else{
                return false
            }
        }

        return true
    }

    let left = 0
    let right = s.length - 1
    while(left < right){
        if(s[left] != s[right]){
            return isValid(s, left + 1, right) || isValid(s, left, right - 1)
        }
        else{
            left++
            right--
        }
    }

    return true
};