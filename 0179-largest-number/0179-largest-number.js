/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort((a,b) => (b.toString()+a.toString()).localeCompare(a.toString()+b.toString()))
    
    if(nums[0] === 0){
        return "0"
    }
    
    return nums.join('');
};