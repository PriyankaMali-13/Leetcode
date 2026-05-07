/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapping = {};

    for (let i = 0; i < s.length; i++) {
        if (s[i] in mapping) {
            if (mapping[s[i]] !== t[i]) {
                return false;
            }
        } else {
            if (Object.values(mapping).includes(t[i])) {
                return false;
            }
            mapping[s[i]] = t[i];
        }
    }

    return true;
    
};