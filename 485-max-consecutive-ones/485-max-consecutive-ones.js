/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let ans = 0
    let localMax = 0
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            localMax++
            ans = Math.max(ans, localMax)
        }
        else{
            localMax = 0
        }
    }
    
    return ans
};