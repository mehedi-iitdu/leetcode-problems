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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
    let q = [root]
    let levelSum = []

    while(q.length > 0){
        let sum = 0
        let n = q.length

        // read the nodes on a same level
        for(let i = 0; i < n; i++){
            let node = q.shift()
            sum += node.val

            if(node.left) q.push(node.left)
            if(node.right) q.push(node.right)
        }

        levelSum.push(sum)
    }

    levelSum.sort((a,b) => b-a)

    return levelSum.length < k ? -1: levelSum[k-1]
};