/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let sum = "";
    let len = Math.max(a.length, b.length);
    a = a.padStart(len, "0");
    b = b.padStart(len, "0");

    let i = len - 1;
    let carry = 0;
    while (i >= 0) {
        if (Number(a[i]) + Number(b[i]) + carry >= 2) {
            sum = (Number(a[i]) + Number(b[i]) + carry - 2).toString() + sum;
            carry = 1;
        } else {
            sum = (Number(a[i]) + Number(b[i]) + carry).toString() + sum;
            carry = 0;
        }
        i--;
    }
    if (carry) sum = "1" + sum;
    return sum;
};