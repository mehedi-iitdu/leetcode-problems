/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let charsOfS = []
    let charsOfT = []
    
    for(let i = 0; i < s.length; i++){
        if(s[i] == '#'){
            charsOfS.pop()
        }
        else{
            charsOfS.push(s[i])
        }
    }
    
    for(let i = 0; i < t.length; i++){
        if(t[i] == '#'){
            charsOfT.pop()
        }
        else{
            charsOfT.push(t[i])
        }
    }
    
    return charsOfS.join('') === charsOfT.join('')
};