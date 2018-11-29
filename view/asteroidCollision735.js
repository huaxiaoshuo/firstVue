var asteroidCollision = function(asteroids) {
  /*
  * 寻找所有一正一副交汇处
  * */
  let disPoseArr = JSON.stringify(asteroids)
  disPoseArr = JSON.parse(disPoseArr)
  let returnFUN = function (disPoseArr, a = 0) {
    let length = disPoseArr.length - 1;
    if (a > length) return disPoseArr
    while (a <= length) {
      if (disPoseArr[a] === 0) {

      }
      if (disPoseArr[a] > 0 && disPoseArr[a + 1] < 0) {
        if (Math.abs(disPoseArr[a]) === Math.abs(disPoseArr[a + 1])) {
              disPoseArr.splice(a, 2)
        } else if (Math.abs(disPoseArr[a]) < Math.abs(disPoseArr[a + 1])) {
          disPoseArr.splice(a, 1)
        } else {
          disPoseArr.splice(a + 1, 1)
        }
        return returnFUN(disPoseArr, a ? a - 1 : 0)
      } else {
        a += 1
      }
    }
    return disPoseArr
  }
  let result = returnFUN(disPoseArr)
  console.log(result)
};
asteroidCollision([10, 2, -5, 20, -20])
