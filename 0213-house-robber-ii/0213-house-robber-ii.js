/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length == 1) return nums[0]
    if(nums.length <3) {
        return Math.max(nums[0], nums[1])
    }
    
    let nums1 = nums.slice(1)
    let nums2 = nums.slice(0, -1)
    
    let dp = []
    dp[0]  = nums1[0]
    dp[1]  = Math.max(nums1[0], nums1[1])
    
    for(let i=2; i<nums1.length; i++){
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums1[i])
    }
    
    let dp2 = []
    dp2[0]  = nums2[0]
    dp2[1]  = Math.max(nums2[0], nums2[1])
    
    for(let i=2; i<nums2.length; i++){
        dp2[i] = Math.max(dp2[i-1], dp2[i-2] + nums2[i])
    }
    
    return Math.max(dp[nums1.length -1], dp2[nums2.length -1])
};