/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a,b)=>a-b);
	
	let unique=[...new Set(nums)];
	
	if(unique.length>=3){
		return unique[(unique.length)-3];
	}
    
	else{
		return Math.max(...unique);
	}
};