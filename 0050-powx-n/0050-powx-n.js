/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1;
    
    let half = myPow(x, Math.floor(Math.abs(n) / 2));
    let pow = half * half;
    
    if (Math.abs(n) % 2 === 1) pow *= x;

    return n < 0 ? 1 / pow : pow;
};