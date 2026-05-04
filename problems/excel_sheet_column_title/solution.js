/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    let result = "";
    while (columnNumber > 0) {
        let remainder = (columnNumber - 1) % 26;
        let letter = String.fromCharCode(65 + remainder);
        columnNumber = Math.floor((columnNumber - 1) / 26);
        result = letter + result;
    }
    return result;
};