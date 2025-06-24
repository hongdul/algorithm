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

/**
    - Set + 투 포인터 방식 -
    var lengthOfLongestSubstring = function(s) {
        let set = new Set();
        let maxLen = 0;
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            while (set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }
            set.add(s[right]);
            maxLen = Math.max(maxLen, right - left + 1);
        }

        return maxLen;
    };
*/