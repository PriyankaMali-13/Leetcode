class Solution:
    def findNumbers(self, nums: List[int]) -> int:
        count = 0
        b = []
        for i in nums :
            val = list(str(i))
            b.append(val)
        for i in b :
            if len(i) % 2 == 0 :
                count = count + 1
        return count