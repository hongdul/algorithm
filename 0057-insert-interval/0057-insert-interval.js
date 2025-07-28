/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (intervals.length === 0) return [newInterval];
    intervals.sort((a, b) => a[0] - b[0]);
    let i = 0;
    while (i < intervals.length) {
        if (intervals[i][1] >= newInterval[0]) {
            let t = i;
            while (t < intervals.length && intervals[t][0] <= newInterval[1]) {
                newInterval = [
                    Math.min(intervals[t][0], newInterval[0]),
                    Math.max(intervals[t][1], newInterval[1])
                ];
                t++;
            }
            intervals.splice(i, t - i, newInterval);
            break;
        }
        i++;
        if (i === intervals.length) {
            intervals.push(newInterval);
        }
    }
    return intervals;
};