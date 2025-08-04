/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 1) return 1;

    let answer = nums.length;
    let dupCount = 1;
    let i = 0;
    while (i < answer) {
        if (i === 0) {
            i++;
            continue;
        }
        if (nums[i] === nums[i - 1]) {
            dupCount++;
            console.log(i, nums[i], dupCount);

            if (dupCount >= 3) {
                let tempCount = 1;
                while (nums[i + tempCount] === nums[i]) {
                    tempCount++;
                }
                nums.splice(i, tempCount);
                answer -= tempCount;
                dupCount = 1;
            }
        } else {
            dupCount = 1;
        }

        i++;
    }
    return answer;
};