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
  for(let i = 0; i<arrayLength - 1; i++) {
    let minIndex = i
    for(let j = i; j<arrayLength - 1; j++) {
      if(less(array[minIndex], array[j+1])) continue
      else {minIndex = j + 1}
    }
    exchange(array, i, minIndex)
  }
  return array
}

console.log(insertionSort([1,1,6,6,88,2,5,4,3,9,6]))
