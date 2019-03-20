
// 完成

var lengthOfLongestSubstring = function(s) {
  // let result = 0
  // let returnArr = function (length) {
  //   if (length > s.length) return
  //     let ARRS = []
  //   for (let a = 0; a <= s.length - length; a++) {
  //     let str = s.substr(a, length)
  //     ARRS.push(str)
  //     if (isRepeat(str)) {
  //       result = str.length
  //     }
  //   }
  //   if (ARRS.length === 0) return result
  //   returnArr(length + 1)
  // }
  // if (s.length === 1) {
  //   result = 1
  // } else if (s.length > 1) {
  //   returnArr(2)
  // }
  // function isRepeat (arr) {
  //   let copySTR = {}
  //   for (let a = 0; a < arr.length; a++) {
  //   if (copySTR[arr[a]]) return false;
  //     copySTR[arr[a]] = 1
  //   }
  //   return true
  // }
  // return result
};
var lengthOfLongestSubstring = function (s) {
  let ARRS = []
  function returnArr (length) {
    if (length >= s.length) return
    let reArr = []
    for (let a = length; a < s.length; a++) {
      if (reArr.indexOf(s[a]) === -1) {
        reArr.push(s[a])
      } else {
        break
      }
    }
    ARRS.push(reArr.length)
    returnArr(length + 1)
  }
  returnArr(0)
  ARRS = ARRS.sort((a, b) => {
    return a - b
  })
  if (ARRS.length === 0) return 0
  return ARRS[ARRS.length - 1]
}
let result = lengthOfLongestSubstring(" abccdef")
console.log(result)
