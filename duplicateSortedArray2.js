var removeDuplicates = function (nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 2]) {
            nums[k] = nums[i];
            k++
        }
    }
    return k;
};