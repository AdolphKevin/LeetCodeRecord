/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 暴力法破解，时间复杂度O(n²)，空间复杂度O(1)
 */
let twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return new Array(nums[i], nums[j]);
            }
        }
    }
};