/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const MAX_NUM = 2 ** 31 - 1;
    const MIN_NUM = -(2 ** 31);;
    
    let sign = true;
    if (divisor < 0) {
        if (dividend > 0) sign = false;
    } else {
        if (dividend < 0) sign = false;
    }

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    
    let answer = "";
    let count = 0;
    
    while (divisor < MAX_NUM && divisor > MIN_NUM) {
        if (dividend < divisor) break;
        divisor = Number(divisor.toString() + '0');
        count++;
    }

    for (let i = 0; i <= count; i++) {
        let temp = i ? 0 : '';

        while (dividend >= divisor) {
            dividend -= divisor;
            temp++;
        }
        answer += temp.toString();
        divisor = Number(divisor.toString().slice(0, -1));
    }

    if (sign) {
        return Number(answer) > MAX_NUM ? MAX_NUM : Number(answer);
    } else {
        return Number(answer) < MIN_NUM ? MIN_NUM : -Number(answer);
    }
};