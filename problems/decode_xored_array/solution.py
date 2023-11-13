class Solution(object):
    def decode(self, encoded, first):
        """
        :type encoded: List[int]
        :type first: int
        :rtype: List[int]
        
        """
        n = len(encoded) + 1
        arr = [first] + [0] * n

        for i in range(n - 1):
            arr[i + 1] = arr[i] ^ encoded[i]

        return arr[:-1]