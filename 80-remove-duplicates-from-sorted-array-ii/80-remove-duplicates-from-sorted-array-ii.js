/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let previousNumber = nums[0]
    let total = 1
    
    for(let i = 1; i < nums.length; i++){
        if(nums[i] === previousNumber){
            total++
            if(total > 2){
                nums.splice(i, 1)
                i--
                total--
            }
        }
        else{
            total = 1
        }
        
        previousNumber = nums[i]
    }
    
    return nums.length
};