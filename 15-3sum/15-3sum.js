/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // sort the array
    
    nums.sort((a,b)=>a-b);
    
    let n = nums.length;
    
    let result = [];
    
   
    for(let i=0;i<n;i++){
        
        // skip the duplicate tuple elemnts
        
        if(i>0 && nums[i]==nums[i-1]) continue;
        
        // maintain two pointers
        
        let left = i+1;
        
        let right = n-1;
        
        
        while(left<right){
            
            // triplet sum
            
            let sum = nums[left] + nums[right] +nums[i] ;
            
            // push the triplet to result when sum is 0
            
            if(sum==0){
                result.push([nums[i] ,nums[left],nums[right]]);
                left++;
                
                // skip the duplicate elements
                
                // #[-2,-2,0,0,2,2]
                
                while(left<right && nums[left]==nums[left-1]) left++;

            }
            else{
                
                // if sum is greater than 0 , move the right pointer
                // as the array is sorted in increasing order
                
                 if(sum>0){
                    right--;
                    
                }
                
                // move left pointer for negative sum
                
                else left++;
            }
        }
    
    }
    
    // return result

    return result;
};