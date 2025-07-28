/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let factorial = [1];
    for (let i = 1; i <= n; i++) {
        factorial[i] = factorial[i - 1] * i;
    }
    let numbers = Array.from({ length: n }, (_, i) => i + 1);
    let answer = "";
    k--;
    for (let i = n; i >= 1; i--) {
        let index = Math.floor(k / factorial[i - 1]);
        answer += numbers.splice(index, 1);
        k %= factorial[i - 1];
    }

    return answer;
};