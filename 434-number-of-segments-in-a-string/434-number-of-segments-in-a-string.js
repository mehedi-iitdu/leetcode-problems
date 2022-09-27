/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let segments = 0
    let start = false
    
    for(let i = 0; i < s.length; i++){
        if(s[i] != ' '){
            start = true
        }
        else{
            if (start) {
                segments++
                start = false
            }
        }
    }
    
    return start ? segments + 1 : segments
};