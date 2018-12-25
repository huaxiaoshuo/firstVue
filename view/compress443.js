// var compress = function(chars) {
//     let reutrnSTR = function (index, str) {
//         if (index >= str.length) return str
//         let target = str[index]
//         if (str.indexOf(target) === str.lastIndexOf(target)) {
//           reutrnSTR(index + 1, str)
//         } else {
//           console.log(str.lastIndexOf(target) - str.indexOf(target))
//           let length = str.lastIndexOf(target) - str.indexOf(target)
//           str.splice(str.indexOf(target) + 1, length, ...(length + 1) + ''.split(''))
//           console.log((length + 1) + ''.split(''))
//         }
//     }
//   reutrnSTR(0, chars)
// };
// compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"])
let a = [1, 2, 3, 5]
// let reserve=a=>a.map(a.pop,[...a])
let reserve = (a) => {
    return a.map(a.pop, [...a])
}
console.log(reserve(a))
