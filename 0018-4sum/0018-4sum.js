/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let answer = new Set();
    nums.sort((a, b) => a - b);

    let start = 0;
    let end = nums.length - 1;

    while (start < end - 2) {
        while (start + 2 < end) {
            for (let m = start + 1; m < end - 1; m++) {
                let n = end - 1;

                while (m < n) {
                    let sum = nums[start] + nums[m] + nums[n] + nums[end];
                    
                    if (sum == target) {
                        answer.add([nums[start], nums[m],  nums[n], nums[end]].toString());
                        m++;
                        n--;
                    } else if (sum < target) {
                        m++;
                    } else n--;
                }
            }
            end--;
        }
        start++;
        end = nums.length - 1;
    }

    return [...answer].map(str => str.split(',').map(Number));;
};