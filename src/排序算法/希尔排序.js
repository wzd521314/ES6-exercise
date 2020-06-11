//交换数组内两个位置的元素
function exchange (array, index1, index2) {
  let item = array[index1]
  array[index1] = array[index2]
  array[index2] = item
}
//比较两个元素的大小，如果元素1小于元素2则返回true,否则返回false
function less(num1, num2) {
  if(num1 < num2) {return true}
  else {return false}
}
/**
 * @description 实际上就是设置了步长的插入排序
 * @param {num[]} array 
 * @returns {num[]} array
 */
function shell(array) {
  if(array.length === 1) return array
  let increment = 1
  while(increment < Math.floor(array.length/3)) {
    increment = increment*3 + 1
  }
  //增量被设置了几次，就意味了进行了几次插入排序，当增量为1时就全等于插入排序
  while (increment > 0) {
    //间隔为增量的插入排序
    for(let i = increment; i< array.length; i++) {
      for(let j = i; j>=increment; j-=increment) {
        if(less(array[j],array[j - increment])) exchange(array, j, j - increment)
        else break
      }
    }

    increment = Math.floor(increment/3)
  }

  return array
}

console.log(shell([1,8,8,2,6,3,9,5,3,6,8,3]))