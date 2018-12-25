var rotate = function(nums, k) {
  k = k % nums.length
  let length = nums.length
 let returnNum = function (index) {
   if (index === k) return;
   nums.unshift(nums[nums.length - 1])
   nums.length = length
   returnNum(index + 1)
 }
  returnNum(0)
  console.log(nums)
};
let results = rotate([1,2,3,4, 5, 6, 7], 3)
console.log(results);
