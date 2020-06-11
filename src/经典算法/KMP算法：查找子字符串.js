function getNext(strArray) {
  let next = []
  let len = 0
  next[0] = 0
  for(let i = 1; i < strArray.length; i++) {
    //如果第i位仍然等于前面的第len位
    if(strArray[i] === strArray[len]) {
      len++
      next[i] = len
    }else {
      /**
       * 不相等则分为两种情况
       * 1.之前的len为0，则直接置把len=0
       * 2.之前的len不为0,则len = next(len - 1)
       */
      if(len === 0){
        next[i] = 0
      }else {
        //!!!重点是这步
        len = next[len - 1]
        next[i] = len
      }
    }
  }

  return next
}


function kmpSearch(parentStr, childStr) {
  let parentArray = parentStr.split('')
  let childArray = childStr.split('')
  let parentLen = parentArray.length
  let childLen = childArray.length
  let nextArray = getNext(childArray)

  //分别初始化i--父字符串指针 j--子字符串指针
  let i = 0
  let j = 0
  while(i< parentLen) {
    /**
     * i指针和j指针的元素相等时，如果此时的j已经指向了子字符串的最后一位(j===childLen - 1)，则说明已经完全匹配，返回下标即可，如果没有指向最后一位，
     * 则分别将i和j移动一位并继续比较
     */
    if(parentArray[i] === childArray[j]) {
      if(j === childLen - 1) {
        return i-j+1
      }
      i++
      j++
    }else {
      //i指针和j指针的元素不想等的情况可分为两种：1。首字母就不相等 2。首字母相等但是继续往后比较时不相等了
      if(j===0) {
        i++
      }else {
        //子字符串需向右移动的位数 = 已匹配的字符数(j) - 前一位的next值(next[j - 1])
        //则j的指针需重新设为 j = j - 向右移动的位数(j - next[j - 1]) = next(j - 1)
        
        j = nextArray[j - 1]
        // i -= nextArray[j-1]
        // j = 0 
      }
    }
  }
  return -1
}

var parentStr = 'ABCDAaBD ABCDABD'
var childStr = 'ABCDABD'
var nextArray = [0, 0, 0, 0, 1, 2, 0]
console.log(kmpSearch(parentStr, childStr))


