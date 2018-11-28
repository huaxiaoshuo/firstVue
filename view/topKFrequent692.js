var topKFrequent = function(words, k) {
  let timeObj = {},
      result = [];
  for (let a = 0; a < words.length; a++) {
    if (timeObj[words[a]]) {
      timeObj[words[a]] += 1
    } else {
      timeObj[words[a]] = 1
    }
  }
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
  console.log(result)
};
topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 1)
