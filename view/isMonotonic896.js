var isMonotonic = function(A) {
  let B = C = JSON.stringify(A);
  B = JSON.parse(B).sort((a, b) => {
    return a - b
  })
  C = JSON.parse(C).sort((a, b) => {
    return b - a
  })
  console.log(A.join('') === B.join('') || A.join('') === C.join(''))
  return A.join('') === B.join('') || A.join('') === C.join('')
};
isMonotonic([6,5,4,4])
