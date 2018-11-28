// var twoSum = function(numbers, target) {
//   let result = []
//   for (let a = 0; a < numbers.length; a++) {
//     if (numbers.lastIndexOf(target - numbers[a]) >= 0) {
//       result.push(a + 1, numbers.lastIndexOf(target - numbers[a]) + 1)
//       break
//     }
//   }
//   return result
// };
// twoSum([2, 7, 11, 15], 9)

let num = 1000
let newBuffer = new ArrayBuffer(1000 * 4)
let arr = new Int32Array(newBuffer)
for (let a = 0; a < arr.length; a++) {
  arr[a] = a
}
console.log(arr.length)
