/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = ""
    let tempString = ""

    for(let i = 0; i < s.length; i++){
        if(s[i] != " "){
            tempString = tempString + s[i]
        }
        else{
            if(tempString.length != ""){
                if(result == ""){
                    result = tempString + result
                }
                else{
                    result = tempString + " " + result
                }
                tempString = ""
            }
        }
    }
    
    if(result == "") return tempString
    return tempString.length != "" ? tempString + " " + result : result
};