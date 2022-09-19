/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const diff = (set, target) => [...set].filter(s => !target.has(s))

    const [n1, n2] = [new Set(nums1), new Set(nums2)]
    return [diff(n1, n2), diff(n2, n1)]
};