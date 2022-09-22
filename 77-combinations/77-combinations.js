/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = []
    
    const DFS = (start, combination) => {
        if (combination.length == k){
            result.push([...combination])
            return
        }
        
        for(let i = start; i < n; i++){
            combination.push(i+1)
            DFS(i+1, combination)
            combination.pop()
        }
    }
    
    DFS(0, [])
    
    return result
};