/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return "1";
    let answer = "1";
    let c = 1;
    while (c < n) {
        answer = rle(answer);
        c++;
    }
    return answer;

    function rle(s) {
        if (s.length === 1) return "1" + s;
        let result = "";
        let count = 1;

        for (let i = 0; i < s.length; i++) {
            if (s[i] === s[i + 1]) {
                count++;
            } else {
                result += `${count}${s[i]}`;
                count = 1;
            }
        }
        return result;
    }
};