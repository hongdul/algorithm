/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let i = 0;
    let j = 0;
    let nextIndex = 0;

    while (j < needle.length) {
        if (i === haystack.length) return -1;
        if (haystack[i] === needle[j]) {
            i++;
            j++;
            if (j !== 0 && nextIndex === 0) nextIndex = i;
        } else {
            if (nextIndex !== 0) {
                i = nextIndex;
                nextIndex = 0;
            } else i++;
            
            j = 0;
        }   
    }
    return i - needle.length;
};