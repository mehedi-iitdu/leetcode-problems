var uniquePaths = function(m, n, memo = {}) {
    // recursion
//     const key = `${m},${n}`;
//     if (key in memo) return memo[key]
//     if (m == 1 && n == 1) return 1
//     if (m == 0 || n ==0) return 0
    
//     memo[key] =  uniquePaths(m-1, n, memo) + uniquePaths(m, n-1, memo)
//     return memo[key]
    
    let dp = []
    for(let i=0; i <= m; i++){
        dp[i] = []
    }
    
    for(let i=0; i < m; i++){
        for(let j=0; j < n; j++){
            if(i== 0 || j == 0){
                dp[i][j] = 1
            }
            else{
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
    }
    
    return dp[m-1][n-1]
};