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
};