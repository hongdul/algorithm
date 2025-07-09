/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let pOpen = ['(', '{', '['];
    let pMatch = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']'],
        [')', '('],
        ['}', '{'],
        [']', '['],
    ])

    for (let c of s) {        
        if (pOpen.includes(c)) stack.push(c);
        else {
            let last = stack.pop();
            if (last && last == pMatch.get(c)) continue;
            return false;
        }
    }

    return stack.length == 0;
};