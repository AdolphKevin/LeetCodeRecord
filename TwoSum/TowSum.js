let nums = [2, 7, 11, 15];
let target = 9;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 暴力法破解，时间复杂度O(n²)，空间复杂度O(1)
 */
let twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] == target && i != j) {
                return new Array(i, j);
            }
        }
    }
};

/**
 * @param {number[]} nums
 * @param {number} targe
 * @return {number[]}
 * 利用数组本身，替代另一个参数，从而减少时间复杂度
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 */
let Hash = function (nums, target) {
    let complete = -1;
    let index = -1
    for (let i = 0; i < nums.length; i++) {
        //利用目标值减去数组中的数值
        complete = target - nums[i];
        //得到的数值查看是否存在与数组中
        index = nums.indexOf(complete);
        //如果存在，并且与被减值不是同一个值，则返回下标索引
        if (index > -1 && index != i) {
            return new Array(i, index);
        }
    }
}