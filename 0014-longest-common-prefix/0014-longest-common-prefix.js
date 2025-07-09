/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let str = strs[0];
    let answer = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        for (let n = 0; n < strs.length; n++) {
            if (strs[n][i] === char) continue;
            return answer;
        }
        answer += char;
    }
    
    return answer;
};