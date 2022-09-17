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
    
    function traverseTree(currentNode, level) {
        if (!currentNode) return

        if(result[level]){
            result[level].push(currentNode.val)
        }
        else{
             result[level] = [currentNode.val]
        }
        level++
        traverseTree(currentNode.left, level)
        traverseTree(currentNode.right, level)
    }
    
    traverseTree(root, 0)
    return result
};