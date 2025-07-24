/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let exists = new Map();
    
    for (let i = 0; i < strs.length; i++) {
        let str = strs[i].split("").sort().join("");
        if (!exists.has(str)) {
            exists.set(str, [strs[i]]);
        } else {
            exists.get(str).push(strs[i]);
        }
    }
    return Array.from(exists.values());
};