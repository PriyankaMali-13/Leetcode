class Solution:
    def xorOperation(self, n: int, start: int) -> int:
        nums = []
        for i in range(0, n) :
            s = start + 2*i
            nums.append(s)
        x = nums[0]
        for i in range(1, len(nums)) :
            x = x ^ nums[i]
        return x