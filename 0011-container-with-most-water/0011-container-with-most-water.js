/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    let maxAmount = 0;
    let left = 0, right = height.length - 1;

    while (left < right) {
        let amount = (right - left) * Math.min(height[left], height[right]);
        maxAmount = maxAmount > amount ? maxAmount : amount;
        if (height[left] < height[right]) left++;
        else right--;
    }
    return maxAmount;
};