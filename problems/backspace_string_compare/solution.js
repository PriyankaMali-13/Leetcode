/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 //two ptrs approach
 //note bruteforce is easier then this -> use stack approach, # found in s or t pop or else push to new arr then join the arr and check if arr_s == arr_t
var backspaceCompare = function (s, t) {
  let right_s = s.length - 1;
  let right_t = t.length - 1;
  while (right_s >= 0 || right_t >= 0) {
    let skip_s = 0;
    while (right_s >= 0) {
      if (s[right_s] === "#") {
        skip_s++;
        right_s--;
      } else if (skip_s > 0) {
        skip_s--;
        right_s--;
      } else {
        break;
      }
    }
    let skip_t = 0;
    while (right_t >= 0) {
      if (t[right_t] === "#") {
        skip_t++;
        right_t--;
      } else if (skip_t > 0) {
        skip_t--;
        right_t--;
      } else {
        break;
      }
    }

    if (right_s >= 0 && right_t >= 0) {
      if (s[right_s] != t[right_t]) return false;
    } else if (right_s >= 0 || right_t >= 0) return false;

    right_s--;
    right_t--;
  }
  return true;
};