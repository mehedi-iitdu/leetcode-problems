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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let result = []
    
    const DFSTraverse = function (currentNode, targetSum, path){
        if(!currentNode){
            return false
        }

        targetSum -= currentNode.val
        path.push(currentNode.val)

        if(targetSum == 0 && !currentNode.left && !currentNode.right){
            result.push([...path])
        }

        DFSTraverse(currentNode.left, targetSum, path)
        DFSTraverse(currentNode.right, targetSum, path)
        
        path.pop()
    }
    
    DFSTraverse(root, targetSum, [])
    
    return result
};