/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let minimumTime = 0
    
    for(let i = 0; i < colors.length;) {
        let currentColor = colors[i]
        let highestCostOfRemoval = neededTime[i]
        let nextIndex = i + 1
        
        while(colors[nextIndex] === currentColor) {
            minimumTime += Math.min(neededTime[nextIndex], highestCostOfRemoval)
            highestCostOfRemoval = Math.max(neededTime[nextIndex], highestCostOfRemoval)
            nextIndex++
        }
        
        i = nextIndex
    }
    
    return minimumTime
};