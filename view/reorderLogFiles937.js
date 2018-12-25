var reorderLogFiles = function(logs) {
  let arr = [], arr2 = [];
  for (let a = 0; a < logs.length; a++) {
    let target = logs[a].split(' ')[1][0]
    if (!(target.charCodeAt() >= 97 && target.charCodeAt() <= 122)) {
      arr.push(logs[a])
    }else {
      arr2.push(logs[a])
    }
  }
  let sorts = function(a, b) {
    return a.charCodeAt(0) - b.charCodeAt(0)
  }
  arr2.sort(sorts)
  arr2 = arr2.concat(arr)
  console.log(arr2)
};
reorderLogFiles(["j mo", "5 m w", "g 07", "o 2 0", "t q h"])
