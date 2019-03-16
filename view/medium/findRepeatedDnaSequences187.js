// var findRepeatedDnaSequences = function(s) {
//   let result = [],length = s.length - 9;
//   for (let a = 0; a < length; a++) {
//     let substr = s.substring(a, a + 10)
//     if (s.indexOf(substr) !== s.lastIndexOf(substr) && result.indexOf(substr) === -1) {
//       result.push(substr)
//     }
//   }
//   return result
// };



var findRepeatedDnaSequences = function(s) {
  let result = [], resultObj = {}, length = s.length - 9;
  for (let a = 0; a < length; a++) {
      let substr = s.substring(a, a + 10)
      if (!resultObj[substr]){
        resultObj[substr] = 1
      } else {
        resultObj[substr] =  resultObj[substr] + 1
      }
  }
  for (let b in resultObj) {
    if (resultObj[b] > 1) {
      result.push(b)
    }
  }
  return result
};
console.time('开始时间')
findRepeatedDnaSequences("AAAAAAAAAAAA")
console.timeEnd('开始时间')
