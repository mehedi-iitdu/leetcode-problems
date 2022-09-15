/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], {count: ++map.get(s[i]).count, index: i})     
        }
        else {
            map.set(s[i], {count: 1, index: i})
        }
    }
    
	for (let value of map.values()) {
       if (value.count === 1) return value.index;
    }
    
    return -1;
};