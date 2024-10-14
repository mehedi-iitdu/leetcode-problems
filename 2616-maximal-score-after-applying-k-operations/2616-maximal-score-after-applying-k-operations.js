/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
    let maxHeap = new MaxPriorityQueue({ compare: (a, b) => b - a })

    nums.forEach((e) => {
        maxHeap.enqueue(e)
    })

    let totalScore = 0

    for(let i = 0; i < k; i++){
        let score = maxHeap.dequeue()
        totalScore += score
        maxHeap.enqueue(Math.ceil(score/3))
    }

    return totalScore
};