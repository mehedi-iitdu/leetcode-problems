/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result = []
    let hashMap = new Map()
    let minLengthArr = nums1.length < nums2.length ? nums1 : nums2
    let maxLengthArr = nums1.length >= nums2.length ? nums1 : nums2
    
    for(let i = 0; i < maxLengthArr.length; i++){
        if(maxLengthArr[i] in hashMap){
            hashMap[maxLengthArr[i]]++
        }
        else{
            hashMap[maxLengthArr[i]] = 1
        }
    }
        
    for(let i = 0; i < minLengthArr.length; i++){
        if(minLengthArr[i] in hashMap && hashMap[minLengthArr[i]] > 0) {
            result.push(minLengthArr[i])
            hashMap[minLengthArr[i]]--
        }
    }
    return result
};