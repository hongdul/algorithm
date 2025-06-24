/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    // numMap 에 { number(key) : index(value) } 형태로 저장
    var numMap = new Map();

    for (var i = 0; i < nums.length; i++) {
        var seen = numMap.get(target - nums[i]);
        if (seen != undefined) {
            return [i, seen];
        }
        numMap.set(nums[i], i);
    }

};