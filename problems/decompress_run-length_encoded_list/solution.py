class Solution:
    def decompressRLElist(self, nums: List[int]) -> List[int]:
        result = []
        for i in range(0, len(nums), 2) :
            curr = [nums[i + 1]] * nums[i]
            result = result + curr
        return result