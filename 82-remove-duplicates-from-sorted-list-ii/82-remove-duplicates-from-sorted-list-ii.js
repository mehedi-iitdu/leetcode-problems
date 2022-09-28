/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let prev = new ListNode(-101, head)
    let current = prev
    let result = prev
    
    while(current && current.next) {
        if(current.val === current.next.val){
            let duplicate = current.val
            while(current && current.val === duplicate){
                current = current.next
            }
            prev.next = current
        }
        else{
            prev = current
            current = current.next   
        }
    }
    
    return result.next
};