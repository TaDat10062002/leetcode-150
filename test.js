const nums = [3, 3, 4, 4, 4];

const map = new Map();
var majorityElement = function (nums) {
    let result;
    var sortedArr = nums.sort();

    // set vi tri, neu ma so vi tri cua so do lon hon 1 / 2 cua mang tra ve so do
    // 5 / 2 = 2.5 vi tri la sortedArr[2]
    result = sortedArr[Math.floor(sortedArr.length / 2)];
    return result;
}

majorityElement(nums);