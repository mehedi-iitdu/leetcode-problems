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
var sumOfLeftLeaves = function(root) {
    let sum = 0
    let queue = []
    queue.push(root)
    
    while(queue.length > 0){
        const currentNode = queue.shift()
        if (currentNode.left) {
            queue.push(currentNode.left)
            if(!currentNode.left.left && !currentNode.left.right) {
                sum += currentNode.left.val   
            }
        }
        if (currentNode.right) {
            queue.push(currentNode.right)
        }
    }
    
    return sum
};