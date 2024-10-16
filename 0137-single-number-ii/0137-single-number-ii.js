/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let numberCount = {}

    for(let i = 0; i < nums.length; i++){
        if(numberCount[nums[i]]){
            numberCount[nums[i]]++
        }
        else{
            numberCount[nums[i]] = 1
        }
    }

    for(let key in numberCount){
        if(numberCount[key] === 1){
            return parseInt(key)
        }
    }
};