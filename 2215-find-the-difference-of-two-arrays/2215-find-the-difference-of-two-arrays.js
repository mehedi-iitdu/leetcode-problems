/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let distinct1 = []
    let distinct2 = []
    
    for(let i = 0; i < nums1.length; i++){
        if(nums2.indexOf(nums1[i]) < 0 && distinct1.indexOf(nums1[i]) < 0){
            distinct1.push(nums1[i])
        }
    }
    
    for(let i = 0; i < nums2.length; i++){
        if(nums1.indexOf(nums2[i]) < 0 && distinct2.indexOf(nums2[i]) < 0){
            distinct2.push(nums2[i])
        }
    }
    
    return [distinct1, distinct2]
};