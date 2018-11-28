var wordBreak = function (s, wordDict) {
    let result = false
    let resultConect = ''
    let resultSplit = function (index, target) {
      if (target === resultConect) {
        result = true
        return
      }
      for (let a = 0; a < wordDict.length + 1; a++) {
        if ( a === wordDict.length) {
          result = false
          break
        }
         if (target.indexOf(wordDict[a]) === index) {
          resultConect += wordDict[a]
           let targetArr = target.split('')
           targetArr.splice(index, wordDict[a].length)
           target = targetArr.join('')
           console.log(target)
           index += wordDict[a].length
           console.log(index, target.indexOf(wordDict[a]), resultConect)
          resultSplit(index, target)
        }

      }
    }
  resultSplit(0, s, '')
  console.log(result)
};
wordBreak('applepenapple', ['apple', 'pen'])
