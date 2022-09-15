/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    arr = s.split('')
    
    for(let i = 0; i < s.length; i = i + 2 * k){
        let left = i
        let right = i + k -1
        
        while (left < right) {
            if (arr[right] === undefined) {
                right--;
                continue;
            }
            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
            
            left++;
            right--;
        }
    }
    
    return arr.join('')
};