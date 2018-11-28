// var calculate = function (s) {
//   let result = {
//     resultArr: [],
//     init: function () {
//     this.getRidBrank()
//       console.log(this.resultArr)
//     },
//     getRidBrank: function () {
//        this.resultArr = s.split('').filter((item) => {
//         return !!item.trim()
//       })
//     }
//   }
//   result.init()
// }
// calculate('3+5 / 2')


// var minRefuelStops = function (target, startFuel, stations) {
//   let result = 0, allStation = 0;
//   if (startFuel < stations[0][0]) {
//     result = -1
//     return result
//   }
//   let results = function () {
//
//   }
//
// }
// minRefuelStops(100, 10, [[10, 60], [20, 30], [30, 30], [60, 40]])


// var uncommonFromSentences = function (A, B) {
//   function returns(num, targetArr) {
//     num = num.split(' ').filter((item) => {
//       return targetArr.indexOf(item) === -1 &&
//           num.indexOf(item) === num.lastIndexOf(item)
//     })
//     return num
//   }
//   console.log([...returns(A, B), ...returns(B, A)])
//   return [...returns(A, B), ...returns(B, A)]
// };
// uncommonFromSentences("banana", "apple apple")

// var uncommonFromSentences = function (A, B) {
//   let strs = A + ' ' + B;
//   strs = strs.split(' ')
//   let result = strs.filter((item) => {
//     return strs.indexOf(item) === strs.lastIndexOf(item)
//   })
//   return result
// };
// uncommonFromSentences("d b zu d t", "udb zu ap")

// let p1 = [-2, 2], p2 = [1, 1], p3 = [1, 2], p4 = [2, 1]
// var validSquare = function (p1, p2, p3, p4) {
//   let concatArray = () => {
//     return Array.prototype.concat.apply([], arguments)
//   }
//   let arrays = concatArray(p1, p2, p3, p4)
//   let result = {}
//   arrays.map((item) => {
//     console.log(Math.abs(item))
//     if (!result[Math.abs(item)]) {
//       result[Math.abs(item)] = 1
//     } else {
//       result[Math.abs(item)] += 1
//     }
//   })
//   console.log(result)
//   console.log(!!(Object.keys(result).length === 2 && Object.values(result)[0] === 4 && Object.values(result)[1] === 4))
//   return !!(Object.keys(result).length === 2 && Object.values(result)[0] === 4 && Object.values(result)[1] === 4)
// }
// validSquare([1,0], [-1,0], [0,1], [0,-1])



// var islandPerimeter = function (grid) {
//   let result = 0
//   grid.map((item, index) => {
//     item = item.filter((i) => {
//       return i === 1
//     })
//     result += item.length * 2
//   })
//
//   console.log(result)
// };
// islandPerimeter([[0,1,0,0], [1,1,1,0], [0,1,0,0], [1,1,0,0]])

// var findMaxConsecutiveOnes = function(nums) {
//   let resultArr = [], num= 0;
//   for (let a = 0; a < nums.length; a++) {
//     if (nums[a] === 0) {
//       resultArr.push(num)
//       num = 0
//     } else {
//       num += 1
//     }
//     if (a === nums.length - 1) resultArr.push(num)
//   }
//   resultArr.sort((a, b) => {
//     return a - b
//   })
//   console.log(resultArr)
// };
// findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])
// var hasAlternatingBits = function(n) {
//   let result = true
//   n = n.toString(2)
//   let returnN = function (index) {
//     if (index === n.length - 1) return;
//     if (n[index] !== n[index + 1]) {
//       returnN(index + 1)
//     } else {
//       result = false
//     }
//   }
//   returnN(0)
//   return result
// };
// hasAlternatingBits(5)


// var isAnagram = function(s, t) {
//   let sorts = (a, b) => {
//     return a.charCodeAt(0) - b.charCodeAt(0)
//   }
//   s = s.split('')
//   t = t.split('')
//   s.sort(sorts)
//   t.sort(sorts)
//   console.log(s.join(''))
//   // // console.log(s.split('').sort(sorts) === t.split('').sort(sorts))
//   return s.join('') === t.join('')
// };
// isAnagram('anagram', 'nagaram')
