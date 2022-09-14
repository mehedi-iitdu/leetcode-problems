/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head) {
        return head
    }
    
    let nums = []
    while(head){
        nums.push(head.val)
        head = head.next
    }
    
    k = k % nums.length
    reverseArray(nums, 0, nums.length - 1)
    reverseArray(nums, 0, k-1)
    reverseArray(nums, k, nums.length - 1)
    
    let current = new ListNode()
    resultHead = current
    
    for(let i = 0; i < nums.length; i++){
        current.next = new ListNode(nums[i])
        current = current.next
    }
    
    return resultHead.next
};

var reverseArray = function(nums, start, end){
    while(start < end){
        let temp    = nums[end]
        nums[end]   = nums[start]
        nums[start] = temp
        
        start++
        end--
    }
}