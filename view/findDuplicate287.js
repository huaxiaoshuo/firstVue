var findDuplicate = function(nums) {
  let result = 0
  for (let a = 0; a < nums.length; a++) {
    if (nums.indexOf(nums[a]) !== nums.lastIndexOf(nums[a])) {
      result = nums[a]
      break
    }
  }
  console.log(result)
};
findDuplicate([1, 3, 4, 2, 2])
