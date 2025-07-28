/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let fac = 1;
    for (let i = 1; i <= n; i++) {
        fac *= i;
    }
    let indexArr = Array.from({ length: n }, () => 0);

    let temp = fac;
    for (let i = n; i >= 1; i--) {
        temp = Math.floor(temp / i);
        let quotient = 0;
        if (k >= temp) {
            for (let l = 1; l <= i; l++) {
                quotient += temp;
                if (k <= quotient) {
                    indexArr[n - i] = l - 1;
                    quotient -= temp;
                    break;
                }
            }
        }
        k -= quotient;
    }
    let numbers = Array.from({ length: n }, (_, i) => i + 1);
    let answer = "";

    for (let i = 0; i < indexArr.length; i++) {
        answer += numbers.splice(indexArr[i], 1);
    }

    return answer;
};