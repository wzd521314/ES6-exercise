//将数组[lo - mid]与[mid+1 - hi]两个有序数部分归并
function merge(array, lo, mid, hi) {
  if(hi > lo) {
    let i = lo
    let j = mid + 1
    let arrayList = []
    arrayList =  arrayList.concat(array)
    for (let k = lo; k<= hi; k++) {
      if(i > mid) {
        array[k] = arrayList[j]
        j++
      }else if (j > hi) {
        array[k] = arrayList[i]
        i++
      }else {
        if(less(arrayList[i], arrayList[j])) {
          array[k] = arrayList[i]
          i++
        }else {
          array[k] = arrayList[j]
          j++
        }
      }
    }
  }

  return array
}
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
 * @returns {num[]} 
 */ 

 //自顶向下的归并方法
function mergeSort (array) {
  upSort(array, 0, Math.floor(array.length / 2), array.length - 1)

  return array
}

function upSort(array, lo, mid, hi) {
  if(mid  > lo) {
    upSort(array,lo, lo + Math.floor((mid - lo) / 2) ,mid )
    upSort(array, mid + 1, mid + 1 + Math.floor((hi - mid - 1) / 2) ,hi)
  }
  merge(array, lo, mid, hi)
  console.log(lo,mid,hi)
  console.log(array)


}
/**
 * 
 * @param {num[]} array 
 * @returns {num[]} 
 */
//自底向上的归并方法
function mergeSort1(array) {
  let N = array.length
  let sz = 1
  while(sz < N) {
    //这里的条件因设为 当数组长度有超过mid（lo+sz-1）[即左半部分有序数组可以确保满载，右边有序数组至少有一个元素]时则可以重复当前长度的归并
    for(let lo = 0; lo< N - sz; lo+= 2*sz) {
      merge(array, lo, lo+sz-1, Math.min(lo+2*sz-1, N-1))
      console.log(lo, lo+sz-1, Math.min(lo+2*sz-1, N-1))
    }
    sz = 2*sz
  }
  return array
}

console.log(mergeSort1([5,3,7,8,9,1,7,9,3,4]))