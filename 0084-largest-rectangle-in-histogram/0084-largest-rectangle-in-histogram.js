/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    if (heights.length === 1) return heights[0];
    let maxSum = 0;

    let i = 0;
    while (i < heights.length) {
        let left = i - 1;
        let right = i + 1;
        while (left >= 0 && heights[left] >= heights[i]) left--;
        while (right < heights.length && heights[right] >= heights[i]) right++;
        let tempSum = (right - left - 1) * heights[i];
        maxSum = maxSum > tempSum ? maxSum : tempSum;
        i++;
        while (heights[i] === heights[i - 1]) i++;
    }

    return maxSum;
};