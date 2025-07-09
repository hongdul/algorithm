/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let answer = [];
    nums.sort((a, b) => a - b);

    let start = 0;
    let end = nums.length - 1;

    while (start < end - 2) {
        while (start + 2 < end) {
            let m = start + 1;
            let n = end - 1;

            while (m < n) {
                let sum = nums[start] + nums[m] + nums[n] + nums[end];
                
                if (sum == target) {
                    answer.push([nums[start], nums[m],  nums[n], nums[end]]);
                    do { m++ } while (nums[m] === nums[m - 1])
                    do { n-- } while (nums[n] === nums[n + 1])
                } else if (sum < target) {
                    m++;
                } else n--;
            }

            do { end-- } while (nums[end] === nums[end + 1])
        }
        do { start++ } while (nums[start] === nums[start - 1])
        end = nums.length - 1;
    }

    return answer;
};