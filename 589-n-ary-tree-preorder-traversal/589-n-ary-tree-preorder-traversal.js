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
    if (!root) return []
    let result = []
    function DFS(root){
        result.push(root.val)
        for(let node of root.children){
            DFS(node)
        }
    }
    DFS(root)
    return result
}