/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits.length) {
        return [];
    }
    
    let output = []
    let keyboard = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    let generateCombination = (index, str) => {
        if (index === digits.length){
            output.push(str)
            return
        }
        for(const letter of keyboard[digits[index]]){
            generateCombination(index+1, str + letter)
        }
    }

    generateCombination(0, "")

    return output
};