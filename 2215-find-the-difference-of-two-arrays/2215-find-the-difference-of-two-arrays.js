/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1.filter(num => !nums2.includes(num)))
    let set2 = new Set(nums2.filter(num => !nums1.includes(num)));
    
    return [[...set1], [...set2]]
};