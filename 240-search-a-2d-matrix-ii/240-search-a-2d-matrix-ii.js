/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rows = matrix.length - 1
    let cols = matrix[0].length - 1
    
    const traverseMatrix = (r, c) => {
        let currernt = matrix[r][c];
        
        if (currernt === null) return false;
        if (currernt === target) return true;
        
        matrix[r][c] = null;
        
        if (currernt > target) {
            return r > 0 && traverseMatrix(r-1, c) || c > 0 && traverseMatrix(r, c-1);
        }
        else {
            return r < rows && traverseMatrix(r+1, c) || c < cols && traverseMatrix(r, c+1);   
        }
    }
    
    return traverseMatrix(0, 0)
};