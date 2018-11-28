var numMatchingSubseq = function(S, words) {
  let resultArr = []
  for (let a = 0; a < words.length; a++) {
    let item = words[a].split(''), isIN = true;
    let lastIndex = 0; // 保存上次index
    let ss = JSON.stringify(S)
    ss = JSON.parse(ss).split('')
    for (let b = 0; b < item.length; b++) {
      if (ss.indexOf(item[b]) > -1) {
        if ((b !== 0) && lastIndex > ss.indexOf(item[b]) && ss.indexOf(item[b]) === ss.lastIndexOf(item[b])) {
          console.log(1111)
          isIN = false
          break
        }
        lastIndex = ss.indexOf(item[b])
        ss.splice(ss.indexOf(item[b]), 1)
      } else {
        isIN = false
        break;
      }
    }
    if (isIN) {
      resultArr.push(item)
    }
  }
  console.log(resultArr.length)
};
numMatchingSubseq("abcde", ["a", "bb", "acd", "ace",'bacd'])
