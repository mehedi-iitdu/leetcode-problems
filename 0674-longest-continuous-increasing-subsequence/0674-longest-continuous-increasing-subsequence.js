/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let globalMax = 0
    let localMax = 1

    for(let i = 1; i < nums.length; i++){
        if (nums[i] > nums[i-1]){
            localMax++
        }
        else{
            globalMax = Math.max(globalMax, localMax)
            localMax = 1
        }
    }

    return Math.max(globalMax, localMax)
};