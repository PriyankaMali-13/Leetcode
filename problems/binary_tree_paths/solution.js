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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let result = [];
    
    function travel(node, path){
        if(node === null) return;
        let new_path = path === "" ? String(node.val) : path + "->" + node.val;
        if(node.left === null && node.right === null){
            result.push(new_path);
        } else {
            travel(node.left, new_path);
            travel(node.right, new_path);
        }
    }
    
    travel(root, "");
    return result;
};