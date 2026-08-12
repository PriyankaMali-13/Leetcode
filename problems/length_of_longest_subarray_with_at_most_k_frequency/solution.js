/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maxSubarrayLength(nums, k) {
    const freq = new Map();

    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < nums.length; right++) {
        const num = nums[right];

        // Add current element
        freq.set(num, (freq.get(num) || 0) + 1);

        // Shrink window if frequency exceeds k
        while (freq.get(num) > k) {
            const leftNum = nums[left];

            freq.set(leftNum, freq.get(leftNum) - 1);

            left++;
        }

        // Current window is good
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}