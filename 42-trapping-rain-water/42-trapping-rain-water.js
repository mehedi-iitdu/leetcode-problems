/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let leftMax = height[0]
    let rightMax = height[height.length - 1]
    let result = 0
    let left = 1
    let right = height.length - 2
    
    while(left <= right){
        if(leftMax < rightMax){
            if(height[left] > leftMax){
                leftMax = height[left]
            }
            else{
                result = result + (leftMax - height[left])
            }
            left++
        }
        else{
            if(height[right] > rightMax){
                rightMax = height[right]
            }
            else{
                result = result + (rightMax - height[right])
            }
            right--
        }
    }
    
    return result
};