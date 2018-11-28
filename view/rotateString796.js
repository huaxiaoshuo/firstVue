var rotateString = function(A, B) { // 完成
  if (A.length !== B.length) return false
  A = A.split('')
  let result = true
  let returnA = function (index) {
    if (A.join('') === B) return;
    if (index === B.length - 1) {
      result = false
      return
    };
    let FIRSTSTR = A.splice(0, 1)[0]
    A.push(FIRSTSTR)
    console.log(A)
    returnA(index + 1)
  }
  returnA(0)
  console.log(result)
};
rotateString('abcdef', 'cvdeab')
