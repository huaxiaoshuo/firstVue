var islandPerimeter = function(grid) {
  let result = 0
  let lastLNEGTH = 0
  for (let a = 0; a < grid.length; a++) {
    let item = grid[a] || []
    item = item.filter((i) => {
      return i === 1
    })
    if (item.length) {
      result = result + item.length * 2 + 2
      if (a !== 0) {
        let diffs = lastLNEGTH > item.length ? item.length : lastLNEGTH
        result =  result - diffs * 2
      }
      lastLNEGTH = item.length
    }
  }
  return result
};
let result = islandPerimeter(
  [
    [1],
    [0]
  ]
)
console.log(result)
