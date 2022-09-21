/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let freshOrange = 0
    let minutes = 0
    let q = []
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if (grid[i][j] === 1) freshOrange++
            else if(grid[i][j] === 2) q.push([i,j])
        }
    }
    
    let tempQ = []
    
    while (q.length > 0) {
        const [r,c] = q.shift()
        
        if(r < grid.length - 1 && grid[r+1][c] === 1){
            grid[r+1][c] = 2
            tempQ.push([r+1, c])
        }
        if(r >= 1 && grid[r-1][c] === 1){
            grid[r-1][c] = 2
            tempQ.push([r-1, c])
        }
        if(c < grid[0].length - 1 && grid[r][c+1] === 1){
            grid[r][c+1] = 2
            tempQ.push([r,c+1])
        }
        if(c >= 1 && grid[r][c-1] === 1){
            grid[r][c-1] = 2
            tempQ.push([r,c-1])
        }
        
        if(q.length === 0 && tempQ.length > 0){
            q.push(...tempQ)
            freshOrange -= tempQ.length
            tempQ = []
            minutes++
        }
    }
    
    return freshOrange === 0 ? minutes : -1 
};