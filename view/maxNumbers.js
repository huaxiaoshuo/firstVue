var largestNumber = function(nums) {
  let disposes = {
    numObj: {},
    nums: nums,
    result: 0,
    init: function () {
      let _this = this
      this.nums.map((item, index) => {
        _this.numObj[index] = (item + '').length == 1 ? item : (item + '').split('')
      })
      this.disposeAll(this.numObj)
    },
    disposeAll: function (numObj) {
      for (let a in numObj) {
        console.log(numObj[a].constructor)
      }
    }
  }
  disposes.init()
};

largestNumber([3, 30, 34, 5, 9])
