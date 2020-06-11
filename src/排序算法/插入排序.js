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
 * 
 * @param {num[]} array 
 * @returns {num[]} array
 */
function insertionSort(array) {
  let arrayLength = array.length
  for(let i = 1; i<arrayLength; i++) {
    let compareIndex = i
    for(let j = i; j>0; j--) {
      if(less(array[compareIndex],array[j-1])) {
        exchange(array, compareIndex, j-1)
        compareIndex--
      }else {break}
    }
  }
}

console.log(insertionSort([2,1,2,3,8,5,7,4,2,1]))