class Solution:
    def numJewelsInStones(self, J: str, S: str) -> int:
        total = 0
        for ele in J:
            total += S.count(ele)
        return total