/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
// 중심 확장법
    let start = 0, end = 0;

    // 중심을 기준으로 양쪽으로 확장
    const expand = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return [left + 1, right - 1]; // 실제 팰린드롬 구간
    };

    for (let i = 0; i < s.length; i++) {
        // 홀수 길이 팰린드롬 (중심점 하나)
        const [l1, r1] = expand(i, i);

        // 짝수 길이 팰린드롬 (중심점 두 개)
        const [l2, r2] = expand(i, i + 1);

        if (r1 - l1 > end - start) [start, end] = [l1, r1];
        if (r2 - l2 > end - start) [start, end] = [l2, r2];
    }

    return s.slice(start, end + 1);
};