/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x <= 1) return x;
    let left = 1;
    let right = x;
    let mid = Math.floor((left + right) / 2);

    while (left < right) {
        if (mid * mid > x) {
            right = mid;
        } else if (mid * mid < x) {
            left = mid;
        } else return mid;
        mid = Math.floor((left + right) / 2);
        if (left === mid) return mid;
    }
    return mid;
};