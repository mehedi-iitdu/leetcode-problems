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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let count = 0
    
    const DFSTraverse = function (currentNode, targetSum, path){
        if(!currentNode){
            return false
        }
        
        path.push(currentNode.val)

        let sum = 0
        for(let i = path.length - 1; i >= 0; i--){
            sum += path[i]
            if(sum == targetSum){
                count++
            }
        }

        DFSTraverse(currentNode.left, targetSum, path)
        DFSTraverse(currentNode.right, targetSum, path)
        
        path.pop()
    }
    
    DFSTraverse(root, targetSum, [])
    
    return count
};