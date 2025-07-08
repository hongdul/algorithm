/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let answer = [];
    let charArr = [];
    let charMap = new Map([
        ['2', 'abc'],
        ['3', 'def'],
        ['4', 'ghi'],
        ['5', 'jkl'],
        ['6', 'mno'],
        ['7', 'pqrs'],
        ['8', 'tuv'],
        ['9', 'wxyz'],
    ]);

    if (digits.length <= 1) {
        return digits.length == 1 ? charMap.get(digits[0]).split("") : [];
    }

    for (let i = 0; i < digits.length; i++) {
        charArr.push(charMap.get(digits[i]));
    }

    for (let i = 0; i < charArr[0].length; i++) {
        let char = charArr[0][i];
        addChar(char, 1);
    }

    function addChar(char, l) {
        console.log(char, l);
        if (l >= digits.length) {
            answer.push(char);
            return;
        }
        let chars = charArr[l];
        
        for (let i = 0; i < chars.length; i++) {
            addChar(char + chars[i], l + 1);
        }
    }
    return answer;
};