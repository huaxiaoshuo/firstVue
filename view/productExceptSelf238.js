var productExceptSelf = function (nums) {
  let resultarr = []
  for (let a = 0; a < nums.length; a++) {
    let resultNum = 1
    for (let b = 0; b < nums.length; b++) {
      if (b === a) {
        resultNum *= 1
      }else {
        resultNum *= nums[b]
      }
    }
    resultarr.push(resultNum)
  }
  console.log(resultarr)

};
productExceptSelf([1, 2, 3, 4])
