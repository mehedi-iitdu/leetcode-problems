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
var countNodes = function(root) {
    let numOfNodes = 0
    
    const traverseTree = (node) => {
        numOfNodes++
        node.left ? traverseTree(node.left) : null
        node.right ? traverseTree(node.right) : null
    }

    root ? traverseTree(root) : null

    return numOfNodes
};