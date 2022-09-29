/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let result = Infinity
    
    for(let num of nums){
        if(Math.abs(num) < Math.abs(result)){
            result = num
        }else if(Math.abs(num) === Math.abs(result)){
            result = Math.max(num, result)
        }
    }

    return result;
};