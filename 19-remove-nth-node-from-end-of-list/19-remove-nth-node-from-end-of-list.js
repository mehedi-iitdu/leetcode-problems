/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let arrayOfNodes = []
    
    while(head){
        arrayOfNodes.push(head.val)
        head = head.next
    }
    
    let current = new ListNode()
    let resultHead = current
    
    for(let i = 0; i < arrayOfNodes.length; i++){
        if(i === (arrayOfNodes.length - n)){
            continue
        }
        current.next = new ListNode(arrayOfNodes[i])
        current = current.next
    }
    
    return resultHead.next
};