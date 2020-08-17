class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        cur = 0
        nums1 = []
        for i in range(0,len(nums)) :
            cur = cur + nums[i]
            nums1.append(cur)
        return nums1