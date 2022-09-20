/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let rows = mat.length
    let cols = mat[0].length
    let dp   = Array(rows).fill().map(() => Array(cols).fill(Infinity))
    
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(mat[i][j] === 0){
                dp[i][j] = 0
            }
            else{
                if(i > 0){
                    dp[i][j] = Math.min(dp[i][j], dp[i-1][j] + 1)
                }
                if(j > 0){
                    dp[i][j] = Math.min(dp[i][j], dp[i][j-1] + 1)
                }
            }
        }
    }
    
    for(let i = rows - 1; i >= 0; i--){
        for(let j = cols - 1; j >= 0; j--){
            if(i < rows - 1){
                dp[i][j] = Math.min(dp[i][j], dp[i+1][j] + 1)
            }
            if(j < cols - 1){
                dp[i][j] = Math.min(dp[i][j], dp[i][j+1] + 1)
            }
        }
    }
    
    return dp
};