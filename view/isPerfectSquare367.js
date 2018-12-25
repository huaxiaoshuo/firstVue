var isPerfectSquare = function(num) {
  let returnSQIT = function (index) {
    if (index * index > num) return false
    if (index * index === num) return true
    return returnSQIT(index + 1)
  }
 let result = returnSQIT(0)
  console.log(result)
};
isPerfectSquare(16)
