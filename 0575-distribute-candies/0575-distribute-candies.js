/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let maximumType = new Set([...candyType])
    return Math.min(candyType.length / 2, maximumType.size)
};