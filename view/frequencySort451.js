var frequencySort = function(s) {
  let timeObj = {}
  let result = ''
  for (let a = 0; a < s.length; a++) {
    if (timeObj[s[a]]) {
      timeObj[s[a]] += 1
    } else {
      timeObj[s[a]] = 1
    }
  }
  let leng = Array.from(new Set(Object.values(timeObj))).length
  console.log(leng)
  let returnStr = function(index) {
    if (index === leng) return;
    let maxNum = Math.max.apply(null, Object.values(timeObj))
    for (let b in timeObj) {
      if (timeObj[b] === maxNum) {
        let str = ''
        for (let c = 0; c < timeObj[b]; c++) {
          str += b
        }
        result += str
        delete timeObj[b]
        returnStr(index)
      }

    }
  }
  returnStr(0)
  console.log(result)
};
frequencySort("cccaaa")
