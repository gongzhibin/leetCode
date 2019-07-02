/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [];
    nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) break;

        if(i > 0 && nums[i] === nums[i - 1]) continue;

        let second = i + 1;
        let last = nums.length - 1;

        while(second < last) {
            if (last < nums.length - 1 && nums[last] === nums[last + 1] || (nums[i] + nums[second] + nums[last]) > 0) {
                last--;
            } else if (second > i + 1 && nums[second] === nums[second - 1] || (nums[i] + nums[second] + nums[last]) < 0) {
                second++;
            } else {
                res.push([nums[i], nums[second++], nums[last--]]);
            }
        }
    }
    return res;
};

const res = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(res);