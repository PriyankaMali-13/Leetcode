class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        result = []
        for i in range(len(nums)) :
            total = 0
            for j in range(len(nums)) :
                if j != i and nums[j] < nums[i] :
                    total = total + 1
            result.append(total)
        return result
        