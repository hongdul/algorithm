/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === " " || !s[i]) return s.length - 1 - i;
    }
    return s.length;
};