/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head) return false
    
    let setOfNodes = new Set()
    
    while(head) {
        if(setOfNodes.has(head)) {
            return true
        }
        setOfNodes.add(head)
        head = head.next
    }
    
    return false
};