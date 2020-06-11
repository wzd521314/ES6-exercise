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
 * @description 冒泡排序
 * @param {num[]} Array 
 * @return {num[]} 
 */
function bubbleSort(array) {
  let arrayLength = array.length

  for(let i = 0; i<arrayLength - 1; i++) {
    for(let j = i; j<arrayLength - 1; j++) {
      if(less(array[j], array[j+1])) {
        continue
      }else {
        exchange(array, j, j+1)
      }
    }
  }

  return array
}

console.log(bubbleSort([1,2,4,7,4,5]))