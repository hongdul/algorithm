/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    const sign = x < 0 ? '-' : '';
    const max = Math.pow(2, 31);

    const answer = Number(sign + Math.abs(x).toString().split('').reverse().join(''));
    return answer > (max - 1) || answer < -max ? 0 : answer;
};