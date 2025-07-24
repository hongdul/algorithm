/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let exists = new Map();
    let count = 0;
    let answer = [];
    
    for (let i = 0; i < strs.length; i++) {
        let str = strs[i].split("").sort().join("");
        let index = exists.get(str);
        if (index === undefined) {
            exists.set(str, count);
            count++;
            answer.push([strs[i]]);
        } else {
            answer[index].push(strs[i]);
        }
    }
    return answer;
};