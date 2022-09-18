/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // calculate leftMax
    let maxLeft = [0]
    let leftMax = height[0]
    
    for(let i = 1; i < height.length; i++){
        if(height[i-1] > leftMax){
            maxLeft[i] = height[i-1]
            leftMax    = height[i-1]
        }
        else{
            maxLeft[i] = leftMax
        }
    }
    
    // calculate rightMax
    let maxRight = []
    maxRight[height.length - 1] = 0
    let rightMax = height[height.length - 1]
    
    for(let i = height.length - 2; i >= 0; i--){
        if(height[i+1] > rightMax){
            maxRight[i] = height[i+1]
            rightMax    = height[i+1]
        }
        else{
            maxRight[i] = rightMax
        }
    }
    
    let result = 0
    
    for(let i = 1; i < height.length - 1; i++){
        let trappedArea = Math.min(maxLeft[i], maxRight[i])
        if(height[i] < trappedArea){
            result = result + (trappedArea - height[i])
        }
    }
    
    return result
};