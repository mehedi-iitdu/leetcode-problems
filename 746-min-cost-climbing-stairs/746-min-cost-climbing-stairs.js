/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    dp = []
    dp[0] = cost[0]
    dp[1] = cost[1]
    let length = cost.length
    
    for(let i = 2; i < length; i++){
        dp[i] = Math.min(dp[i-2] + cost[i], dp[i-1] + cost[i])
    }
    
    return Math.min(dp[length-2], dp[length-1])
};