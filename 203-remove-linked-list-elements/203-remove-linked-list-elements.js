/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let prev = null
    let current = head
    let resultHead = current
    
    while(current){
        if(current.val === val){
            if(prev){
                let next = current.next
                prev.next = next
                current = next
            }
            else{
                resultHead = current.next
                current = current.next
            }
        }
        else{
            prev = current
            current = current.next
        }
    }
    
    return resultHead
};