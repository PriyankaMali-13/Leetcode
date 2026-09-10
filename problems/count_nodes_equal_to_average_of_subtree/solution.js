/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var averageOfSubtree = function(root) {
    let count = 0;
    
    function dfs(node){
        if(node == null) return [0,0];
        let [leftSum, leftCount] = dfs(node.left);
        let [rightSum, rightCount] = dfs(node.right);

        let totalSum = leftSum + rightSum + node.val;
        let totalCount = leftCount + rightCount + 1;

        if(Math.floor(totalSum / totalCount) === node.val) count++;

        return [totalSum, totalCount];
    }
    
    dfs(root);
    return count;
};