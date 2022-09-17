/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color, visited = new Map()) {
    var fill = function(image, i, j, color, startingColor){
        if (i < 0 || i >= image.length || j < 0 || j >= image[0].length){
            return
        }
        
        const objectKey = i + "-" + j
        if(visited.has(objectKey)) return
        
        visited.set(objectKey, true)
        
        if (image[i][j] != startingColor) return
        
        image[i][j] = color
        
        fill(image, i+1, j, color, startingColor, visited)
        fill(image, i-1, j, color, startingColor, visited)
        fill(image, i, j-1, color, startingColor, visited)
        fill(image, i, j+1, color, startingColor, visited)
    }
    
    if(image[sr][sc] === color) return image;
    
    fill(image, sr, sc, color, image[sr][sc])
    
    return image
};