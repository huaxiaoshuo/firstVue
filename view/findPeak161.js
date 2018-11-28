var findPeakElement = function(nums) {
  let result = 0
  let returnPeak = (index) => {
    if (nums === nums - 1) return;
    if (nums[index] > nums[index - 1] && nums[index] > nums[index + 1]) {
      result = nums[index]
    } else{
      returnPeak(index + 1)
    }
  }
  returnPeak(1)
  console.log(result)
};
findPeakElement([1,2,3,1])
