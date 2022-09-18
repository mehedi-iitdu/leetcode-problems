/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let result = []
    function DFS(root){
        if (!root) return
        result.push(root.val)
        for(let node of root.children){
            DFS(node)
        }
    }
    DFS(root)
    return result
}