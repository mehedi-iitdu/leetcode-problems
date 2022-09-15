/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let stringArray = s.split(" ");
    let newStringArray = [];
    let temp;
    let element;

    for (element of stringArray){
        let words = element.split("");
        
        let left = 0;
        let right = words.length - 1;

        while(left < right){
            let temp = words[left];
            words[left] = words[right];
            words[right] = temp;
            left++;
            right--;
        }
        newStringArray.push(words.join(''))
    }
    
    return newStringArray.join(" ");
};