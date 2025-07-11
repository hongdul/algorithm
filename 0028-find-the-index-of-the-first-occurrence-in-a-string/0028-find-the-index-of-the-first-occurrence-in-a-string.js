/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let i = 0;
    let j = 0;

    while (j < needle.length) {
        if (i === haystack.length) return -1;
        if (haystack[i] === needle[j]) {
            i++;
            j++;
        } else {
            let nextIndex = haystack.slice(i - j + 1, i + 1).indexOf(needle[0]);
            if (nextIndex !== -1) {
                i = nextIndex + i - j + 1;
            } else i++;
            
            j = 0;
        }   
    }
    return i - needle.length;
};