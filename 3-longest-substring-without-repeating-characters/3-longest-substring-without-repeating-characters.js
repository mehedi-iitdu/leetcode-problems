/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let tempMax = 0 
    let maxLen = 0;
    const map = new Map();   
  
    for(let i = 0; i < s.length; i++) { 
        const char = s[i]; 
      
        if (map.get(char) >= tempMax) { 
            tempMax = map.get(char) + 1; 
        }

        map.set(char, i); 
      
        maxLen = Math.max(maxLen, i - tempMax + 1)
    }

    return maxLen
};