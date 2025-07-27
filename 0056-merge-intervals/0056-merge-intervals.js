/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 1) return intervals;
    let numMap = new Map();

    for (let i = 0; i < intervals.length; i++) {
        let interval = intervals[i];
        for (let n = interval[0]; n < interval[1]; n++) {
            if (numMap.get(n)) continue;
            else numMap.set(n, true);
        }
        if (!numMap.get(interval[1])) numMap.set(intervals[i][1], false);
    }

    let numbers = [...numMap.keys()].sort((a, b) => a - b);
    let answer = [];
    let i = 0;
    let start = 0;
    while (i < numbers.length) {
        if (numMap.get(numbers[i])) {
            i++;
        } else {
            answer.push([numbers[start], numbers[i]]);
            i++;
            start = i;
        }
    }
    
    return answer;
};