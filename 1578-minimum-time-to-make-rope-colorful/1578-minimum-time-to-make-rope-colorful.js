/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let minimumTime = 0
    
    for(let i = 0; i < colors.length;) {
        let currentColor = colors[i]
        let costOfRemoval = neededTime[i]
        let nextIndex = i + 1
        
        while(colors[nextIndex] === currentColor) {
            minimumTime += Math.min(neededTime[nextIndex], costOfRemoval)
            costOfRemoval = Math.max(neededTime[nextIndex], costOfRemoval)
            nextIndex++
        }
        
        i = nextIndex
    }
    
    return minimumTime
};