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
var minDepth = function(root) {
    if (!root) return 0
    
    let minimumDepth = 0
    let queue = [root]
    
    while(queue.length > 0){
        let levelSize = queue.length
        minimumDepth++
        
        // finish traversing all nodes of current level
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift()
            
            if (!currentNode.left && !currentNode.right) return minimumDepth
            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)
        }
    }
    
    return minimumDepth
};