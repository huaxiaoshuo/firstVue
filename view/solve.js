
let arr = [
  ['x', 'x', 'x', 'x'],
  ['x', 'o', 'o', 'x'],
  ['x', 'x', 'o', 'x'],
  ['x', 'o', 'x', 'x']

]
var solve = function (board) {
  for (let a = 0; a < board.length; a++) {
    let item = board[a]
    for (let b = 0; b < item.length; b++) {
      // if (item[b] === 'o') {
      //   item[b] = 'x'
      // }
    }
    board[a] = item
  }
  return board
}
solve(arr)
