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
var getMinimumDifference = function(root) {
    
    let globalMin = Number.MAX_SAFE_INTEGER
    
    const DFS = (root, previousNodeVal, path) => {
        if (!root) return 
        
        //calculate abs difference with previous nodes
        for(let i = 0; i < path.length; i++){
            globalMin = Math.min(globalMin, Math.abs(root.val - path[i]))
        }
        
        //push current node into path
        path.push(root.val)
        
        DFS(root.left, root.val, path)
        DFS(root.right, root.val, path)
        
        path.pop()
    }
    
    DFS(root, globalMin, path=[])
    
    return globalMin
};