/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) return n;

    let answer = 1;
    let twoCount = 1;

    while (2 * twoCount <= n) {
        let count = twoCount + n - (2 * twoCount);
        answer += nCm(count, twoCount);
        twoCount++;
    }
    return answer;

    function nCm(n, m) {
        let top = 1;
        for (let i = 1; i <= m; i++) {
            top *= n - i + 1;
            top /= i;
        }
        return top;
    }
};