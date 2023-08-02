const nums = [1, 5, 8, 9, 54, 6, 32, 5, 5, 11];
let big = nums[0];
for (const num of nums) {
    if (num > big) {
        big = num
    }
}
console.log(big);