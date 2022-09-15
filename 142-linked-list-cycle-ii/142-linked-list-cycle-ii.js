/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head) return head
    
    let setOfNodes = new Set()
    
    while(head) {
        if(setOfNodes.has(head)) {
            return head
        }
        setOfNodes.add(head)
        head = head.next
    }
    
    return null
};