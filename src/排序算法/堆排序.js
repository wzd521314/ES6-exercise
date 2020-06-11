class Heap {
  constructor (a) {
    this.list = []
    for(let i = 0; i<a.length; i++) {
      this.list[i+1] = a[i]
    }
    this.length = a.length
  }
}

class priorityQueue extends Heap {
  constructor(array) {
    //这里的super等同于Heap.prototype.constructor.call(this, props)
    super(array)
  }
  //堆排序
  heapSort() {
    let sortedList = []
    let N = this.length
    for(let i = 0; i<N; i++) {
      sortedList.push(this.pop())
    }
    return sortedList
  }
  //判断元素的大小关系
  less(num1, num2) {
    if(num1 < num2) {return true}
    else {return false}
  }

  //交换两个元素
  exchange (array, index1, index2) {
    let item = array[index1]
    array[index1] = array[index2]
    array[index2] = item
  }
  //上浮元素的上浮
  swim(index) {
    while(index > 1) {
      if(this.less(this.list[Math.floor(index/2)] ,this.list[index])) {
        this.exchange(this.list, Math.floor(index/2) ,index)
        index = Math.floor(index /2)

      }else break
      
    }
  }
  //元素的下沉
  sink(index) {
    while(2*index <= this.list.length - 1) {
      if(this.list[2*index + 1]) {
        let maxChildIndex = this.less(this.list[2*index], this.list[2*index + 1]) ? 2*index+1 : 2*index
        if(this.less(this.list[maxChildIndex], this.list[index])) {
          break
        }else {
          this.exchange(this.list, maxChildIndex, index)
          index = maxChildIndex
        }
      }else {
        if(this.less(this.list[index] , this.list[2*index])) {
          this.exchange(this.list,index, 2*index)
          break
        }else break
      }
    }
  }

  //插入元素
  insert(element) {
    this.list[++this.length] = element
    this.swim(this.length)
  }

  //弹出元素
  pop() {
    let maxElement = this.list[1]
    this.exchange(this.list, 1, this.length)

    this.list.splice(this.length--,1)
    this.sink(1)
    return maxElement
  }
}


let test = new priorityQueue([])

test.insert(2)
test.insert(13)

test.insert(1)

test.insert(9)
test.insert(3)
test.insert(99)
test.insert(10)



console.log(test.heapSort())