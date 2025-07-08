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
        while (mid < right) {
            let sum = nums[left] + nums[mid] + nums[right];

            if (sum == 0) {
                answer.push([nums[left], nums[mid], nums[right]]);
                do { mid++ } while (nums[mid] == nums[mid - 1])
                do { right-- } while (nums[right] == nums[right + 1])
            } else if (sum < 0) {
                do { mid++ } while (nums[mid] == nums[mid - 1])
            } else {
                do { right-- } while (nums[right] == nums[right + 1]);
            }
        }

        do { left++ } while (nums[left] == nums[left - 1])
        mid = left + 1;
        right = nums.length - 1;
    }
    return answer;
};