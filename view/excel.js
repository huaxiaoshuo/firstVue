// var convertToTitle = function(n) {
//   console.log(Math.floor(n / 26))
//   let result = ''
//   let nums = n
//   function returnResult (n) {
//     if (n <= 26) {
//       console.log(n)
//       nums = n
//       return
//     }
//     result += String.fromCharCode(64 + Math.floor(n / 26))
//     returnResult(Math.floor(n / 26))
//   }
//   returnResult(n)
//   if (nums !== 0)
//     // console.log(nums)
//     result += String.fromCharCode(64 + nums);
//   return result
// };
// let r = convertToTitle(701)
// console.log(r)


// 众数   [2,2,1,1,1,2,2]


var majorityElement = function(nums) {
  let obj = {},result = 0;
  for (let a = 0; a < nums.length; a++) {
      let item = nums[a]
    if (obj[item]) {
      obj[item] = obj[item] + 1
    } else {
      obj[item] = 1
    }
  }
  for (let a in obj) {
    if (obj[a] >= (parseInt(nums.length) / 2)) {
      result = parseInt(a)
    }
  }
  return result
};
majorityElement([2, 2, 1, 1, 1, 2, 2])
