class Queue {
  constructor() {
    this.count = 0
    this.first = null
    this.last = null
  }

  Node() {
    this.content = null
    this.next = null
  }
    
  //判断栈内是否有元素
  isEmpty() {
    if(this.count === 0) return true

    return false
  }
  //栈内元素的个数
  size() {
    return this.count
  }
  //向队列队尾添加元素
  enqueue(content) {
    let oldLast = this.last
    this.last = new this.Node()
    this.last.content = content
    this.last.next = null
    if(this.count === 0) {
      this.first = this.last

    }else {
      oldLast.next = this.last
    }    
    this.count++
  }
  //向队列队首删除元素并返回
  dequeue() {
    if(this.count === 0) return false
    let oldFirst = this.first
    this.first = oldFirst.next
    this.count--
    if(this.isEmpty()) this.last = null
    return oldFirst.content
  }

  //遍历队列内的所有元素
  iterator() {
    let node =this.first
    let result = ''
    while(node) {
      console.log(node)
      result += node.content
      node = node.next
    }
    return result
  }
}

let test  = new Queue()
test.enqueue(1111)
test.enqueue(222)
test.enqueue(333)

console.log(test.iterator())

