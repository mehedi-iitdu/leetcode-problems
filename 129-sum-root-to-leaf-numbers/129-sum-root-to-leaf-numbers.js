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
var sumNumbers = function(root) {
    let sum = 0
    
    const DFS = (root, path) => {
        if(!root) return
        
        path.push(root.val)
        
        if(!root.left && !root.right){
            sum += parseInt(path.join(''))
        }
        
        DFS(root.left, path)
        DFS(root.right, path)
        path.pop()
    }
    
    DFS(root, [])
    
    return sum
};