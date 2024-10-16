/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let maxHeap = new MaxPriorityQueue({ compare: (a, b) => b - a })

    nums.forEach((e) => {
        maxHeap.enqueue(e)
    })

    for(let i = 0; i < k - 1; i++){
        maxHeap.dequeue()
    }

    return maxHeap.dequeue()
};