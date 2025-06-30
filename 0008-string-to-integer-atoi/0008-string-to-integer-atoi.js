/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let num = '';
    let sign = '';

    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    // Step 1
    s = s.trim();

    // Step 2
    if('+-'.includes(s[0])) sign = s[0];
    let startIndex = sign != '' ? 1 : 0;
    if (sign == '+') sign = '';

    // Step 3
    for(let i = startIndex; i < s.length; i++) {
        if (/[0-9]/.test(s[i])) num += s[i];
        else break;
    }
    if (num == '') return 0;
    if (sign == '-') num = Number(sign + num);
    else num = Number(num);
    
    if (num > INT_MAX) return INT_MAX;
    else if (num < INT_MIN) return INT_MIN;
    else return num;

/**
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    let i = 0, sign = 1, result = 0;

    // 1. Skip whitespaces
    while (i < s.length && s[i] === ' ') i++;

    // 2. Handle sign
    if (s[i] === '+' || s[i] === '-') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // 3. Convert digits
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        const digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);

        // Overflow check
        if (result > Math.floor(INT_MAX / 10) || 
            (result === Math.floor(INT_MAX / 10) && digit > 7)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        result = result * 10 + digit;
        i++;
    }

    return result * sign;
*/
};