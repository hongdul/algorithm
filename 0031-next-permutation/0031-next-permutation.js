/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let numsMap = new Map();

    for (let i = nums.length - 1; i > 0; i--) {
        numsMap.set(nums[i], i);
        if (nums[i] <= nums[i - 1]) continue;
        console.log(i, nums[i], numsMap);
        let numbers = numsMap.keys();
        console.log('numbers', numbers);
        let minNum = Math.min(...numbers.filter((n) => n > nums[i - 1]));
        console.log('minNum', minNum);
        let temp = nums[i - 1];
        console.log('temp', temp);
        nums[i - 1] = minNum;
        nums[numsMap.get(minNum)] = temp;
        console.log(nums);

        let sortedNums = nums.slice(i).sort((a, b) => a - b);
        
        return nums.splice(i, nums.length - i, ...sortedNums);
    }
    return nums.reverse();
};
