/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    const pOpen = new Set(['(', '{', '[']);
    const pMatch = new Map([
        [')', '('],
        ['}', '{'],
        [']', '['],
    ])

    for (let c of s) {        
        if (pOpen.has(c)) stack.push(c);
        else {
            let last = stack.pop();
            if (last !== pMatch.get(c)) return false;
        }
    }

    return stack.length === 0;
};