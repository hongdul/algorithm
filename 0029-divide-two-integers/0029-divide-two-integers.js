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

// gpt - 비트 연산 기반 이진 탐색
//     const MAX = 2 ** 31 - 1;
//     const MIN = -(2 ** 31);

//     if (dividend === MIN && divisor === -1) return MAX;

//     let sign = (dividend > 0) === (divisor > 0);  // 같은 부호면 양수

//     let a = Math.abs(dividend);
//     let b = Math.abs(divisor);
//     let result = 0;

//     while (a >= b) {
//         let temp = b, multiple = 1;
//         while (a >= (temp << 1)) {
//             temp <<= 1;
//             multiple <<= 1;
//         }
//         a -= temp;
//         result += multiple;
//     }

//     return sign ? result : -result;
};