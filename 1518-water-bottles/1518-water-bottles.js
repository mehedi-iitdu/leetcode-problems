/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let result = numBottles
    
    while(numBottles >= numExchange) {
        let exchange = Math.floor(numBottles/numExchange)
        result += exchange
        numBottles = exchange + numBottles % numExchange
    }
    
    return result
};