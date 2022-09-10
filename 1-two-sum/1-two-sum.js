/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let complementMap = {}
    
    for(i=0; i < nums.length; i++){
        if(nums[i] in complementMap){
            return [complementMap[nums[i]], i]
        }
        else{
            let complement = target - nums[i]
            complementMap[complement] = i
        }
    }
};
