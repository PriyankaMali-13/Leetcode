class Solution(object):
    def buildArray(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        nums1 = []
        for i in range(len(nums)):
            nums1.append(nums[nums[i]]) 

        return nums1
