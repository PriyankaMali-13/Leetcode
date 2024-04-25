class Solution(object):
    def findNonMinOrMax(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if (len(nums))<3:
            return -1
        else:
            return sorted(nums[:3])[1]
        
            


        