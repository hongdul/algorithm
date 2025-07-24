/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let exists = [];
    let answer = [];
    for (let i = 0; i < strs.length; i++) {
        let str = strs[i].split("").sort().join("");
        let index = exists.indexOf(str);
        if (index === -1) {
            exists.push(str);
            answer.push([strs[i]]);
        } else {
            answer[index].push(strs[i]);
        }
    }
    return answer;
};