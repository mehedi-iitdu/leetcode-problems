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
var maxDepth = function(root) {
    let maxDepth = 0;
    if(root){
        findMaxDepth(root, 0)
    }
    
    function findMaxDepth (currentNode, level){
        if(!currentNode){
            return false;
        }
        level++
        if(level > maxDepth){
            maxDepth = level
        }
        return findMaxDepth(currentNode.left, level) || findMaxDepth(currentNode.right, level)
    }
    
    return maxDepth
};
