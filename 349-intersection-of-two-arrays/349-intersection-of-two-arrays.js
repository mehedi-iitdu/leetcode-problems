/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let result = []
    let minLengthArr = nums1.length < nums2.length ? nums1 : nums2
    let maxLengthArr = nums1.length >= nums2.length ? nums1 : nums2
        
    for(let i = 0; i < minLengthArr.length; i++){
        if(maxLengthArr.indexOf(minLengthArr[i]) >= 0) {
            if(result.indexOf(minLengthArr[i]) < 0){
                result.push(minLengthArr[i])
            }
        }
    }
    return result
};