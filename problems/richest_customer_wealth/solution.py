class Solution(object):
    def maximumWealth(self, accounts):
        """
        :type accounts: List[List[int]]
        :rtype: int
        """
        highest_sum = 0
        for account in accounts:
            sum = 0
            for i in account:
                sum+=i
                if highest_sum < sum:
                    highest_sum = sum
        return highest_sum
