/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
    let frequency = new Array(k).fill(0);

    for(let i = 0; i < arr.length; i++){
        let reminder = arr[i] % k
        if(reminder < 0){
            reminder = reminder + k
        }
        frequency[reminder]++
    }

    console.log(frequency)

    if(frequency[0] % 2 !== 0){
        return false
    }
    
    for(let i = 1; i < k/2; i++) {
        if(frequency[i] !== frequency[k-i]){
            return false
        }
    }
    
    return true
};