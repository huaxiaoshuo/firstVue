var nthUglyNumber = function(n) {
  let returnNth = function (index, result) {
    console.log(result)
    if (result.length === n) return result[result.length - 1]
    if (index === 1) result.push(index)
    if (index % 2 === 0 ||
      index % 3 === 0 ||
      index % 5 === 0) {
      result.push(index)
    }
    return returnNth(index + 1, result)
  }
  let r = returnNth(1, [])
  console.log(r)
};
nthUglyNumber(10)
