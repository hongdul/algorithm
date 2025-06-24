/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var curStr = "";
    var maxLen = curStr.length;

    for (var i = 0; i < s.length; i++) {
        var index = curStr.indexOf(s[i]);

        if (index != -1) {
            curStr = curStr.slice(index + 1) + s[i];
        } else curStr += s[i];
        
        maxLen = maxLen > curStr.length ? maxLen : curStr.length;
    }

    return maxLen;
};