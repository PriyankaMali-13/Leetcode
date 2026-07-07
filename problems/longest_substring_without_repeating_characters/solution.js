/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let right = 0;
  let left = 0;
  let winSize = 0;
  let set = new Set();

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    winSize = Math.max(winSize, right - left + 1);
  }
  return winSize;
};

/* we first check if there are any dubplicates if yes then del and add the curr coming to set

If you add before the while loop:

right=3 → 'a' already in set
          set.add('a') → set={a,b,c,a}? 
          ← Set ignores duplicate, but now while loop runs
          ← deletes 'a' from left → set={b,c}
          ← but we never added the new 'a'!
You must add after the while loop because:

First remove all duplicates → window is clean
Then add new character → guaranteed no duplicates!

 */