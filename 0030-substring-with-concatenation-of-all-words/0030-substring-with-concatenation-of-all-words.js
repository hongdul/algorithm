/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (!s || words.length === 0) return [];

    const wordLen = words[0].length;
    const wordCount = words.length;
    const totalLen = wordLen * wordCount;
    const wordMap = new Map();

    for (const word of words) {
        wordMap.set(word, (wordMap.get(word) || 0) + 1);
    }

    const result = [];

    for (let i = 0; i < wordLen; i++) {
        let left = i;
        let count = 0;
        let curMap = new Map();

        for (let j = i; j <= s.length - wordLen; j += wordLen) {
            const word = s.substring(j, j + wordLen);
            if (wordMap.has(word)) {
                curMap.set(word, (curMap.get(word) || 0) + 1);
                count++;

                while (curMap.get(word) > wordMap.get(word)) {
                    const leftWord = s.substring(left, left + wordLen);
                    curMap.set(leftWord, curMap.get(leftWord) - 1);
                    count--;
                    left += wordLen;
                }

                if (count === wordCount) result.push(left);
            } else {
                curMap.clear();
                count = 0;
                left = j + wordLen;
            }
        }
    }

    return result;
};
