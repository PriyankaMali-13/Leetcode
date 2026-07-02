/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let i = 0;
    let j = 0;
    let result = '';
    while (i < word1.length || j < word2.length) {
        if (i < word1.length) result += word1[i++];
        if (j < word2.length) result += word2[j++];
    }
    return result;
};


/*
why we adding i++ we need to add curr i
word1[i++]
// is same as:
word1[i]   // use current i first
i++        // then increment

It's called post-increment — use the value first, then increment!

i=0 → word1[0] is accessed → then i becomes 1
i=1 → word1[1] is accessed → then i becomes 2
*/ 