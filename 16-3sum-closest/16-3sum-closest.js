/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a-b);
    let closestSum = nums[0] + nums[1] + nums[2]
    
    let n = nums.length
    
    for(let i = 0; i < n; i++){
        let left  = i + 1;
        let right = n - 1
        
        while (left < right){
            let sum = nums[i] + nums[left] + nums[right]
                                                  
            if (Math.abs(target - sum) < Math.abs(target - closestSum)){
                closestSum = sum
            }
            if(sum < target){
                left++
            }
            else{
                right--
            }
        }
    }
    
    return closestSum
};