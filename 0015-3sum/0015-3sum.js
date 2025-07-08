/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let answer = [];
    nums.sort((a, b) => a - b);
    console.log(nums);

    let left = 0;
    let right = nums.length - 1;
    let mid = left + 1;
    
    while (left < nums.length - 2) {    
        let sum = nums[left] + nums[mid] + nums[right];
        
        if (sum == 0) {
            answer.push([nums[left], nums[mid], nums[right]]);
            mid++;
            do { right-- } while (nums[right] == nums[right + 1])
            if (mid < right) continue;
        } else if (sum < 0) {
            mid++;
            if (mid < right) continue;
        } else {
            do { right-- } while (nums[right] == nums[right + 1]);
            if (mid < right) continue;
        }

        do { left++ } while (nums[left] == nums[left - 1])
        mid = left + 1;
        right = nums.length - 1;
    }
    return answer;
};