/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (!nums.length) return 0

    nums.sort((a,b) => a-b)
    let count = 1
    let largestSequence = 1

    for(let i = 1; i < nums.length; i++){
        if(nums[i] == nums[i-1] + 1){
            count++
            largestSequence = Math.max(count, largestSequence)
        }
        else if (nums[i] != nums[i-1]) {
            count = 1
        }
    }

    return largestSequence
};