/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    let numbers = (num + "").split('')
    
    for(let i = 0; i < numbers.length; i++){
        let localMaxIndex = i
        let localMaxNumber = numbers[i]
        let isGoingToSwap = false
        
        for(let j = numbers.length - 1; j > i; j--){
            if(numbers[j] > numbers[i] && numbers[j] > localMaxNumber){
                localMaxIndex = j
                localMaxNumber = numbers[j]
                isGoingToSwap = true
            }
        }

        if(isGoingToSwap){
            [numbers[i], numbers[localMaxIndex]] = [numbers[localMaxIndex], numbers[i]]
            break
        }
    }

    return parseInt(numbers.join(''))
};