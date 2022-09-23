/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    for(let i = triangle.length - 2; i >= 0; i--){
        for(let j = 0; j < triangle[i].length; j++){
            let minSum = Math.min(triangle[i][j] + triangle[i+1][j] , triangle[i][j] + triangle[i+1][j+1])
            triangle[i][j] = minSum
        }
    }
    
    return triangle[0][0]
};