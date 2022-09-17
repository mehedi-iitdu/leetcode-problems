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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = []
    
    function traverseTree(root, level) {
        if (!root) return

        if(result[level]){
            result[level].push(root.val)
        }
        else{
             result[level] = [root.val]
        }
        level++
        traverseTree(root.left, level)
        traverseTree(root.right, level)
    }
    
    traverseTree(root, 0)
    return result
};