var maximumSwap = function (num) {
  let result = num
  let numStr = (num + '').split('')
  for (let a = 0; a < numStr.length - 1; a++) {
    let  maxNum = Math.max.apply(null, numStr.slice(a + 1, numStr.length))
    if (parseInt(numStr[a]) < parseInt(maxNum)) {
      let item = numStr[a]
      console.log(item)
      numStr[a] = maxNum
      numStr[numStr.lastIndexOf(maxNum + '')] = item
      console.log(numStr.lastIndexOf(maxNum + ''))
      result = parseInt(numStr.join(''))
      break
    }
  }
  return result
};
let result = maximumSwap(98368)
console.log(result)
