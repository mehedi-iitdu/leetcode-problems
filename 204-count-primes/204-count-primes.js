/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let isPrime = new Array(n).fill(true)
    isPrime[0] = isPrime[1] = false
    
    for(let i=2; i < n/2; i++){
        if(!isPrime[i]) continue
        
        for(let j=i*2; j < n; j+=i){ 
            isPrime[j]=false;
        }
    }
    
    return isPrime.filter((item) => item==true).length 
};