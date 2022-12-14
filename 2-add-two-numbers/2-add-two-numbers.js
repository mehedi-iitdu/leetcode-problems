/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0
    let currentNode = new ListNode(0)
    let head = currentNode
    
    while(l1 || l2){
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
        if (sum > 9) {
            currentNode.next = new ListNode(sum%10, null)
            carry = 1;
        }
        else{
            currentNode.next = new ListNode(sum%10, null)
            carry = 0;
        }
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        currentNode = currentNode.next
    }
    
    if (carry > 0){
        currentNode.next = new ListNode(carry)
    }
    
    return head.next
};