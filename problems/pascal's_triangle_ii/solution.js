/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let row = [1];  // start with row 0
    
    for(let i = 1; i <= rowIndex; i++){
        let newRow = [1];  // first edge always 1
        
        for(let j = 1; j < i; j++){
            newRow.push(row[j-1] + row[j]);  // middle = sum of two above
        }
        
        newRow.push(1);  // last edge always 1
        row = newRow;    // current row becomes previous for next iteration
    }
    
    return row;
};