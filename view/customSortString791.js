var customSortString = function (S, T) {  // 已完成
  T = T.split('').sort((a, b) => { // 对字符串进行排序
    return a.charCodeAt() - b.charCodeAt()
  })
  let result = ''
  for (let a = 0; a < S.length; a++) {
    let target = S[a]
    let index = T.indexOf(target)
    if (index > -1) {
      result += (T.splice(index, T.lastIndexOf(target) + 1 - index).join(''))
    }
  }
  return result + T.join('')
};
customSortString('cba', 'aaaccaabcccd')
