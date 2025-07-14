/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (nums.join(',') === [...nums].sort((a, b) => b - a).join(',')) {
        nums.reverse();
    } else {
        for (let i = nums.length - 1; i > 0; i--) {
            if (nums[i] <= nums[i - 1]) continue;
            
            let minNum = [i, nums[i]];
            for (let n = i; n < nums.length; n++) {
                if (nums[i - 1] >= nums[n]) continue;
                minNum = minNum[1] > nums[n] ? [n, nums[n]] : minNum;
            }
            
            [nums[i - 1], nums[minNum[0]]] = [nums[minNum[0]], nums[i - 1]];
            
            nums.splice(i, nums.length - i, ...nums.slice(i).sort((a, b) => a - b));
            break;
        }
    }
};

// 최적화
    // let i = nums.length - 1;

    // // 1. 뒤에서부터 감소하지 않는 최초 구간 찾기
    // while (i > 0 && nums[i - 1] >= nums[i]) i--;

    // if (i === 0) {
    //     // 전체 내림차순 → 처음 순열로 리셋
    //     nums.reverse();
    //     return;
    // }

    // // 2. nums[i - 1]보다 큰 수 중 가장 작은 수를 뒤에서부터 찾기
    // let j = nums.length - 1;
    // while (nums[j] <= nums[i - 1]) j--;

    // // 3. swap
    // [nums[i - 1], nums[j]] = [nums[j], nums[i - 1]];

    // // 4. 뒷부분 오름차순 정렬 (원래 내림차순이므로 reverse로 가능)
    // let left = i, right = nums.length - 1;
    // while (left < right) {
    //     [nums[left], nums[right]] = [nums[right], nums[left]];
    //     left++;
    //     right--;
    // }