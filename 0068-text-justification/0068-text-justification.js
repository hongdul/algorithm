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
        if (tempLen + tempWordArr.length + word.length > maxWidth) {
            answer.push(makeStr(tempWordArr));
            tempWordArr = [];
            tempLen = 0;
        }
        tempWordArr.push(word);
        tempLen += word.length;

        i++;
    }
    answer.push(tempWordArr.join(" ").padEnd(maxWidth, " "));

    return answer;

    function makeStr(wordArr) {
        if (wordArr.length === 1) return wordArr[0].padEnd(maxWidth, " ");
        
        let totalChars = wordArr.reduce((acc, cur) => acc + cur.length, 0);
        let totalSpaces = maxWidth - totalChars;
        let gaps = wordArr.length - 1;
        let evenSpace = Math.floor(totalSpaces / gaps);
        let extraSpace = totalSpaces % gaps;

        let line = "";
        for (let i = 0; i < wordArr.length; i++) {
            line += wordArr[i];
            if (i < gaps) {
                line += " ".repeat(evenSpace + (i < extraSpace ? 1 : 0));
            }
        }
        return line;
    }
};