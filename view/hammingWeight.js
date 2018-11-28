var hammingWeight = function(n) {
  n = n.toString(2).split('')
  n = n.filter((item) => {
    return parseInt(item) === 1
  })
  console.log(n.length)
  return n.length
};
hammingWeight(11)
