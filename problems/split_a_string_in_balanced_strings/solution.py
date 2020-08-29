class Solution:
    def balancedStringSplit(self, s: str) -> int:
        R = 0
        L = 0
        total = 0
        for i in s :
            if i == 'R' :
                R += 1
            if i == 'L' :
                L += 1
            if R == L :
                R = 0
                L = 0
                total += 1
        return total
                
        
        