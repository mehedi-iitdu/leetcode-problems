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
 * @return {boolean}
 */
var isValidBST = function(root) {
    return DFS(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
};

var DFS = function(root, min, max){
    if (!root) return true
    if(root.val <= min || root.val >= max) return false
    
    return DFS(root.left, min, root.val) && DFS(root.right, root.val, max)
}