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
    
// gpt - KMP 알고리즘 
    // if (needle.length === 0) return 0;

    // // 1. LPS 배열 생성
    // const lps = buildLPS(needle);

    // let i = 0; // haystack index
    // let j = 0; // needle index

    // while (i < haystack.length) {
    //     if (haystack[i] === needle[j]) {
    //         i++;
    //         j++;
    //         if (j === needle.length) {
    //             return i - j; // 전체 일치!
    //         }
    //     } else {
    //         if (j > 0) {
    //             j = lps[j - 1]; // jump!
    //         } else {
    //             i++;
    //         }
    //     }
    // }

    // return -1; // 일치하지 않음

    // // LPS 함수 정의
    // function buildLPS(pattern) {
    //     const lps = new Array(pattern.length).fill(0);
    //     let len = 0;
    //     let i = 1;

    //     while (i < pattern.length) {
    //         if (pattern[i] === pattern[len]) {
    //             len++;
    //             lps[i] = len;
    //             i++;
    //         } else {
    //             if (len > 0) {
    //                 len = lps[len - 1]; // 이전 일치 정보로 돌아감
    //             } else {
    //                 lps[i] = 0;
    //                 i++;
    //             }
    //         }
    //     }
    //     return lps;
    // }
};