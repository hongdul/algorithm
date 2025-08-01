/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let answer = '';

    let romanMap = new Map([
        [1, 'I'],
        [5, 'V'],
        [10, 'X'],
        [50, 'L'], 
        [100, 'C'],
        [500, 'D'],
        [1000, 'M'],
    ]);
    
    for (let i = num.toString().length - 1; i >= 0; i--) {
        let cur = Math.floor(num / Math.pow(10, i));
        
        let tenChar = romanMap.get(Math.pow(10, i));
        let fiftyChar = romanMap.get(5 * Math.pow(10, i));

        let prefix = cur % 5 == 4 ? tenChar : '';
        let suffix = [1,2,3].includes(cur % 5) ? tenChar.repeat(cur % 5) : '';
        let mid = '';
        if (cur >= 9) mid = romanMap.get(Math.pow(10, i + 1));
        else if(cur >= 4) mid = fiftyChar;

        answer += prefix + mid + suffix;

        num %= Math.pow(10, i);
    }

    return answer;
};

/** 하드코딩 방식
var intToRoman = function(num) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];

    let res = '';
    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            num -= values[i];
            res += symbols[i];
        }
    }
    return res;
};
*/