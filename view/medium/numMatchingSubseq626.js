var numMatchingSubseq = function(S, words) {
  let strIndex = {}
  for (let a = 0; a < S.length; a++) {
    if (!strIndex[S[a]]) {
      strIndex[S[a]] = [a]
    } else {
      strIndex[S[a]].push(a)
    }
  }
  console.log(strIndex)
  for (let b = 0; b < words.length; b++) {
    let word = words[b]

  }
  let previousIndex = 0
  var isWord = function (index, word) {
    if (index === word.length) return true;
    if (!strIndex[word[index]]) return false;

     if (index === 0) {
       previousIndex = word[index]
     } else {
       let arr = strIndex[word[index]].filter((item) => {
         return item > previousIndex
       })

     }

  }
};

numMatchingSubseq('abcde', ["a", "bb", "acd", "ace"])
