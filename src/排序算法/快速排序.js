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

function quicklySort(array) {
  let N = array.length - 1
  quick(array, 0, N)

  return array

}


function quick(array, lo, hi) {
  if(lo === hi) return 
  let v = array[hi]
  let i = lo
  let j = hi - 1
  //开始给锚点元素分配正确的位置
  while(true) {
    //左指针开始向右移动，直到遇到大于或等于V的值或者超出了范围则停止移动
    while(array[i] < v && i < hi) {
      // if(i > hi) {
      //   break
      // }
       i++
    }
    //右指针开始向左移动，直到遇到小于或等于V的值或者超出了范围则停止移动
    while(array[j] > v && j > lo) {
      // if(j < lo) {
      //   exchange(array, lo, hi)
      //   break
      // }
      j--
      
    }
    //当左指针大于右指针时，则说明左指针左边的所有元素都小于锚点元素，右指针右边所有元素都大于锚点元素
    if(i>=j) {
      exchange(array, i, hi)
      break
    }
    exchange(array, i ,j)
    i++
    j--
   }
   console.log(i)
   //将锚点左半部分再执行一次上述操作
   quick(array, 0, Math.max(0,i-1))
   //将锚点右半部分再执行一次上述操作
   quick(array, Math.min(i+1, hi), hi)
}

console.log(quicklySort([1,8,3,7,0,4,8,2,5,8,4,6,9,2]))