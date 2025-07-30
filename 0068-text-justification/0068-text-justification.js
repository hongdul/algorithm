/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let answer = [];

    let i = 0;
    let tempWidth = 0;
    let tempWordArr = [];
    let tempLen = 0;
    while (i < words.length) {
        let word = words[i];
        
        if (i === 0 || tempLen + word.length + 1 > maxWidth) {
            if (tempWordArr.length !== 0) answer.push(makeStr(tempWordArr));
            tempWordArr = [word];
            tempLen = word.length;
        } else {
            tempWordArr.push(word);
            tempLen += word.length + 1;
        }
        if (i === words.length - 1) {
            answer.push(tempWordArr.join(" ").padEnd(maxWidth, " "));
        }
        i++;
    }

    return answer;

    function makeStr(wordArr) {
        if (wordArr.length === 1) {
            return wordArr[0].padEnd(maxWidth, " ");
        } else {
            let len = wordArr.reduce((acc, cur) => {
                acc += cur.length;
                return acc;
            }, 0)
            
            let extraSpaces = (maxWidth - len) % (wordArr.length - 1);
            let spaces = wordArr.reduce((acc, cur, idx) => {
                if (idx === 0) {
                    acc.push("");
                } else if (extraSpaces > 0) {
                    acc.push(" ".repeat(1 + Math.floor((maxWidth - len) / (wordArr.length - 1))));
                    extraSpaces--;
                } else {
                    acc.push(" ".repeat(Math.floor((maxWidth - len) / (wordArr.length - 1))));
                }
                return acc;
            }, []);
            return wordArr.reduce((acc, cur, idx) => {
                if (idx === 0) return cur;
                else {
                    acc += spaces[idx] + cur;
                    return acc;
                }
            }, "");
        }
    }
};