// var champagneTower = function(poured, query_row, query_glass) { //  未完成
//   let SUM = (num) => {
//     if (num === 0) return 0
//     if (num < 2) return 1
//     return num + SUM(num - 1)
//   }
//   let lastTier = SUM(query_row) // 最后一层的上一层倒满所需的酒量
//   let nextTier = SUM(query_row + 1) // 最后一层倒满所需的酒量
//   console.log(lastTier, nextTier)
//   if (lastTier <= poured) {
//     if (nextTier > poured && lastTier <= poured) {
//       // 判断最后一层是否有酒
//       let N = (poured - lastTier) / ((nextTier - lastTier) * 2 - 2)
//       console.log(N)
//       if (query_glass === 0 || query_glass === (nextTier - lastTier) - 1) {
//         return N
//       } else {
//         return N * 2
//       }
//     }
//     return 1
//   }
//   return 0
// };
// console.log(champagneTower(2, 1, 1))

var toLowerCase = function(str) {
    return str.toLocaleLowerCase()
};
console.log(toLowerCase('Hellp'))
