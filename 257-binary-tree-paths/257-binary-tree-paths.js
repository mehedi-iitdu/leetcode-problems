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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let result = []
    
    const DFSTraverse = (root, path) => {
        path.push(root.val)
        if(!root.left && !root.right){
            let str = ""
            for(let i = 0; i < path.length - 1; i++){
                str = str + path[i] + "->"
            }
            str = str + path[path.length - 1]
            result.push(str)
        }
        
        if(root.left) DFSTraverse(root.left, path)
        if(root.right) DFSTraverse(root.right, path)
        
        path.pop()
    }
    
    if(root) DFSTraverse(root, [])
    
    return result
};