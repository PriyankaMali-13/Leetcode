/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    //step 1 - transpose the matrix by doing swapping matrix
    // temp = a;
    // a = b;
    // b = temp;
    // here a = matrix[i][j], b = matrix[j][i]

    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<i; j++){
            temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    //step 2 - reverse the row 
    // here row = matrix[i]
    for(let i=0; i<matrix.length; i++){
        matrix[i].reverse();
    }

};