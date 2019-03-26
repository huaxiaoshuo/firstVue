var combinationSum = function(candidates, target) {
    let candid = candidates.filter((item) => {// 筛选小于target的数
        return item <= target
    })
    candid = candid.sort((a, b) => {
      return b - a
    })
  console.log(candid)

  for (let a = 0; a < candid.length; a++) {
    let item = candid[a]
  }
  function pushCode() {

  }
};


combinationSum([3,2,5], 8)
