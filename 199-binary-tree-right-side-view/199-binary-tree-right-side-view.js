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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return []
    let res = []
    
    function DFS(node, h) {
        if (!node) return
        res[h] = node.val
        DFS(node.left, h+1)
        DFS(node.right, h+1)
    }
    
    DFS(root, 0);
    return res;
};