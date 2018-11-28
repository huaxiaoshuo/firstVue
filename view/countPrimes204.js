var countPrimes = function(n) {
  let result = []
  for (let a = 2; a < n; a++) {
    if (a !== 2 && a % 2 === 0) continue
    let isPrime = true
    var factor = Math.sqrt(a)
    for (let b = 2; b <= factor; b++ ) {
      if (a % b === 0) {
        isPrime = false
        break
      }
    }
    if (isPrime) result.push(a)
  }
  console.log(result)
};
countPrimes(1500000)
