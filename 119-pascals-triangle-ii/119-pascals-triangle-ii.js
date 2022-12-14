/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = []
    for (let i = 0; i < rowIndex; i++){
        result[i] = []
    }
    
    result[0] = [1]
    result[1] = [1,1]
    
    for (let i=2; i <= rowIndex; i++){
        result[i] = []
        result[i][0] = 1
        
        for(let j = 1; j < i; j++){
            result[i][j] = result[i-1][j-1] + result[i-1][j]
        }
        
        result[i][i] = 1
    }
    
    return result[rowIndex]
};