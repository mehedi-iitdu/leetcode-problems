/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    nums.sort((a,b) => a-b)

    let globalMax = 1
    let localMax = 1

    for(let i = 1; i < nums.length; i++){
        if(nums[i] == nums[i-1] + 1){
            localMax++
        }
        else if(nums[i] != nums[i-1]){
            localMax = 1
        }
        globalMax = Math.max(globalMax, localMax)
    }

    return nums.length == 0 ? 0 : globalMax
};