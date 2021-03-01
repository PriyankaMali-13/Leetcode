class Solution:
    def distributeCandies(self, candyType: List[int]) -> int:
        c = len(candyType)
        l = set(candyType)
        p = len(l)
        ans = c//2
        if ans > p:
            return p
        else:
            return ans
        