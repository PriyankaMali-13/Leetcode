/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    let slow = 0;
    let fast = 0;
    while (fast < typed.length) {
        if (name[slow] == typed[fast]) {
            slow++;
            fast++;
        }
        else if (fast > 0 && typed[fast] == typed[fast - 1]) {
            fast++;  // valid long press, skip
        } else {
            return false;  // invalid character!
        }
    }
    return slow == name.length;
};