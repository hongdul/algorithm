/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = digits.length - 1;
    digits[i] += 1;
    while (digits[i] === 10 && i >= 0) {
        digits[i] = 0;
        if (i === 0) {
            digits = [1, ...digits];
            break;
        }
        digits[i - 1] += 1;
        i--;
    }
    return digits;
};