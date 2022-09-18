/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let numMap = {}
    let result = []
    
    for(let i = 0; i < nums.length; i++){
        if(numMap[nums[i]]){
            numMap[nums[i]]++
        }
        else{
            numMap[nums[i]] = 1
        }
    }
    
    // convert map of numbers to array of nums based on frequency 
    numMap = Object.keys(numMap).sort((a,b) => numMap[b] - numMap[a])
    
    for(let i = 0; i < k; i++){
        result.push(parseInt(numMap[i]))
    }
    
    return result
};