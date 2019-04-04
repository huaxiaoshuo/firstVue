var numSubarrayProductLessThanK = function(nums, k) {
  let result = []
  var returnResult = function (length) {
    if (length > nums.length) return
    for (let a = 0; a <= nums.length - length; a++) {
      let item = nums.slice(a, a + length)
      if (isLt(item)) {
        result.push(item)
      }
    }
    returnResult(length + 1)
  }
  returnResult(1)
  console.log(result.length)
  return result.length
  function isLt (arr) {
    return arr.reduce((a, b) => {
      return a * b
    }) >= k ? false : true
  }
};
numSubarrayProductLessThanK([1, 1, 1], 6)
