class Solution:
    def containsNearbyAlmostDuplicate(self, nums: List[int], k: int, t: int) -> bool:
            if t == 0:
                if len(nums) == len(set(nums)):
                    return False
                return True
    
            for i in range(0, len(nums)):
                for j in range(1, len(nums)):
                    if abs(nums[j]-nums[i]) <= t and i != j and abs(j-i) <= k:    
                        return True
            
            return False
        