var topKFrequent = function(words, k) {
  let timeObj = {},timeArr = []
      result = [];
  for (let a = 0; a < words.length; a++) {
    if (timeObj[words[a]]) {
      timeObj[words[a]] += 1
    } else {
      timeArr.push(words[a])
      timeObj[words[a]] = 1
    }
  }
  timeArr.sort((a, b) => {
    return a.charCodeAt(0) - b.charCodeAt(0)
  })
  console.log(timeArr)
  let returnObj = function (timeObj) {
    let obj = {}
    for (let a = 0; a < timeArr.length; a++) {
      obj[timeArr[a]] = timeObj[timeArr[a]]
    }
    return obj
  }
  timeObj = returnObj(timeObj)
  let returnResult = function (index) {
    if (index <= 0) return
    let maxNum = Math.max.apply(null, Object.values(timeObj))
    for (let a in timeObj) {
      if (index === 0) break;
      if (timeObj[a] === maxNum) {
        result.push(a)
        timeObj[a] = 0
        index -= 1
      }
    }
    returnResult(index)
  }
  returnResult(k)
  return result
};
topKFrequent(["aaa","aa","a"], 1)
