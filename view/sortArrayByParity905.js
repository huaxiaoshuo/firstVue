var sortArrayByParity = function(A) {
  let result = []
  for (let a = 0; a < A.length; a++) {
    if (!(A[a] % 2)) {
      result.unshift(A[a])
    } else {
      result.push(A[a])
    }
  }
  return result
}
sortArrayByParity([3, 1, 2, 4])
