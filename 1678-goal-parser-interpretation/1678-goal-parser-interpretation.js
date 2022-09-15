/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let result = ""
    
    for(let i = 0; i < command.length; i++){
        if(command[i] === "("){
            if(command[i+1] === ")"){
                result += "o"
                i++
            }
        }
        else if(command[i] != ")"){
            result += command[i]
        }
    }
    
    return result
};