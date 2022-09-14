/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length
    reverseArray(nums, 0, nums.length - 1)
    reverseArray(nums, 0, k-1)
    reverseArray(nums, k, nums.length - 1)
};

var reverseArray = function(nums, start, end){
    while(start < end){
        let temp    = nums[end]
        nums[end]   = nums[start]
        nums[start] = temp
        
        start++
        end--
    }
}