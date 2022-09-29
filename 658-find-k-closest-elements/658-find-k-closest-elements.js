/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let left = 0
    let right = arr.length - 1
    
    while (right - left >= k) {
        let leftDifference = Math.abs(arr[left] - x)
        let rightDifference = Math.abs(arr[right] - x)
        
        if (leftDifference <= rightDifference) {
            right--
        }
        else {
            left++
        }
    }
    
    return arr.slice(left, right+1)
};