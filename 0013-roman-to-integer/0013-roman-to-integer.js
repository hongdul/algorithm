/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = new Map([
        ['I', 1],      
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);

    let i = 0;
    let answer = 0;

    while (i < s.length) {
        let char = s[i];
        let nextChar = s[i + 1];

        if (romanMap.get(char) < romanMap.get(nextChar)) answer -= romanMap.get(char);
        else answer += romanMap.get(char);
        i++;
    }
    return answer;
};