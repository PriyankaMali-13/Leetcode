class Solution(object):
    def mostWordsFound(self, sentences):
        """
        :type sentences: List[str]
        :rtype: int
        """
        sentence_length = []
        for sentence in sentences:
            sentence_length.append(sentence.count(" ") +1)
        return max(sentence_length)