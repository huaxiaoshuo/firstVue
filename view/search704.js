
var search = function(nums, target) {
  let length = nums.length - 1, l = 0;
  while (l <= length) {
    let m = Math.floor((length + l ) / 2)
    if (nums[m] === target) return m
    if (nums[m] < target) {
      l = m + 1
    } else {
      length = m - 1
    }
  }
  return -1
};
let result = search([-1, 0, 3, 5, 9, 12], 9)
console.log(result)


// function binarySearch(data,item,start,end){
//   var end=end || data.length-1;
//   var start= start || 0;
//   var m=Math.floor((start+end)/2);
//   console.log(m)
//   if(item==data[m]){
//     return m;
//   }else if(item<data[m]){
//     return binarySearch(data,item, start, m-1) //递归调用
//   }else{
//     return binarySearch(data, item, m+1, end);
//   }
//   return false;
// }
//
// var arr = [34, 12, 5, 123, 2, 745, 32, 4];
//
// binarySearch(arr, 5);
