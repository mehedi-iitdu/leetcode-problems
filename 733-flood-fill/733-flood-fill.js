/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    var fill = function(image, i, j, color, startingColor){
        if (i < 0 || i >= image.length || j < 0 || j >= image[0].length){
            return
        }
        if (image[i][j] != startingColor) return

        image[i][j] = color
        
        fill(image, i+1, j, color, startingColor)
        fill(image, i-1, j, color, startingColor)
        fill(image, i, j-1, color, startingColor)
        fill(image, i, j+1, color, startingColor)
    }
    
    if(image[sr][sc] === color) return image;
    
    fill(image, sr, sc, color, image[sr][sc])
    
    return image
};