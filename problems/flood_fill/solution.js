/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let ogColor = image[sr][sc];
    if(ogColor === color) return image;
    dfs(image, sr, sc, ogColor, color);
    return image;
};

function dfs(image, r, c, ogColor, newColor){
    if(r < 0 || r >= image.length || c < 0 || c >= image[0].length) return;
    if(image[r][c] !== ogColor) return;
    image[r][c] = newColor;
    dfs(image, r-1, c, ogColor, newColor);
    dfs(image, r+1, c, ogColor, newColor);
    dfs(image, r, c-1, ogColor, newColor);
    dfs(image, r, c+1, ogColor, newColor);
};