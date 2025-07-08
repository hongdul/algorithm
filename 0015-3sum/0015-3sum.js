/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        // 중복된 숫자는 스킵
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                // 중복 제거
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
    // let answer = [];
    // nums.sort((a, b) => a - b);

    // let left = 0;
    // let right = nums.length - 1;
    // let mid = left + 1;
    
    // while (left < nums.length - 2) {    

    //     while (mid < right) {
    //         let sum = nums[left] + nums[mid] + nums[right];

    //         if (sum == 0) {
    //             answer.push([nums[left], nums[mid], nums[right]]);
    //             do { mid++ } while (nums[mid] == nums[mid - 1])
    //             do { right-- } while (nums[right] == nums[right + 1])
    //         } else if (sum < 0) {
    //             do { mid++ } while (nums[mid] == nums[mid - 1])
    //         } else {
    //             do { right-- } while (nums[right] == nums[right + 1]);
    //         }
    //     }

    //     do { left++ } while (nums[left] == nums[left - 1])
    //     mid = left + 1;
    //     right = nums.length - 1;
    // }
    // return answer;
};