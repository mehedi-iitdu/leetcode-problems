/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
    let priorityQueue = []

    if (a > 0) priorityQueue.push([a, 'a'])
    if (b > 0) priorityQueue.push([b, 'b'])
    if (c > 0) priorityQueue.push([c, 'c'])

    priorityQueue.sort((a,b) => b[0] - a[0])

    let result = ""

    while(priorityQueue.length > 0){
        let element = priorityQueue.shift()

        if(result.length >= 2 && result[result.length - 1] === element[1] && result[result.length - 2] === element[1]){
            if(priorityQueue.length > 0){
                let nextElement = priorityQueue.shift()
                result = result + nextElement[1]
                nextElement[0]--
                nextElement[0] > 0 ? priorityQueue.push([nextElement[0], nextElement[1]]) : null
            }
            else{
                return result
            }
        }
        else{
            result = result + element[1]
            element[0]--
        }
        element[0] > 0 ? priorityQueue.push([element[0], element[1]]) : null

        priorityQueue.sort((a,b) => b[0] - a[0])
    }

    return result
};