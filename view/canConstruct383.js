var canConstruct = function (ransomNote, magazine) { // 未完成
  let magazineOBJ = {},result = true
  for (let a = 0; a < magazine.length; a++) {
    if (magazineOBJ[magazine[a]]) {
      magazineOBJ[magazine[a]] += 1
    } else {
      magazineOBJ[magazine[a]] = 1
    }
  }
  ransomNote = ransomNote.split('').sort((a, b) => {
    return a.charCodeAt(0) - b.charCodeAt(0)
  }).join('')
  console.log(ransomNote)
  console.log(magazineOBJ)
  for (let i = 0; i < ransomNote.length; i++) {
    if (i >= ransomNote.length) break
    if (ransomNote[i] === 'i') {
      console.log(ransomNote.slice(i, ransomNote.lastIndexOf(ransomNote[i]) + 1).length, i)
    }
    if (Object.keys(magazineOBJ).indexOf(ransomNote[i]) > -1 && magazineOBJ[ransomNote[i]] >= ransomNote.slice(i, ransomNote.lastIndexOf(ransomNote[i]) + 1).length) {
     i =  ransomNote.lastIndexOf(ransomNote[i]) + 1
    } else {
      result = false
      break
    }
  }
  return result
};
let result = canConstruct("bhjdigif",
"dbjdhdehgbcdjjgadeegdbegehjffie")
console.log(result)
