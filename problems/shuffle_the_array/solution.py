class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        list1 = nums[0:2*n//2]
        list2 = nums[2*n//2:]
        list3 = []
        for i, j in zip(list1,list2) :
            list3.append(i)
            list3.append(j)
        return list3
        
        
    
         
                
        