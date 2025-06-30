/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const sign = x < 0 ? '-' : '';
    const max = Math.pow(2, 31);

    const answer = Number(sign + Math.abs(x).toString().split('').reverse().join(''));
    return answer > (max - 1) || answer < -max ? 0 : answer;

/**
    let rev = 0;
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    while (x != 0) {
        let pop = x % 10;
        x = (x / 10) | 0; // 정수 나눗셈 (음수도 포함)

        // 오버플로 방지
        if (rev > INT_MAX / 10 || (rev === INT_MAX / 10 && pop > 7)) return 0;
        if (rev < INT_MIN / 10 || (rev === INT_MIN / 10 && pop < -8)) return 0;

        rev = rev * 10 + pop;
    }

    return rev;
    */
};