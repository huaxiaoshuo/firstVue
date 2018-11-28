var dominantIndex = function(nums) {
  let newNums = JSON.stringify(nums)
  newNums = JSON.parse(newNums).sort((a, b) => {
    return a - b
  })
  let target = newNums[newNums.length - 1]
  newNums = newNums.map(function (item) {
    if (item !== target) return item * 2
      return item
  })
  console.log(newNums)
};
dominantIndex([3, 6, 1, 0])
