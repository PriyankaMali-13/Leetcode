class Solution(object):
    def leftRightDifference(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        answer = []
        for i in range(len(nums)):
            ls = sum(nums[:i])
            rs = sum(nums[i+1:])
            diff = abs(ls - rs)
            answer.append(diff)
        return answer