class Stack {
  constructor() {
    this.first = null
    this.count = 0
  }

  //创建Node节点构造函数
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
  //从栈顶删除元素
  pop() {
    //如果栈内为空则直接返回
    if(this.count === 0) return false

    let item = this.first.content
    this.first = this.first.next
    this.count --
    return item

  }
  //从栈顶添加元素
  push(content) {
    let oldFirst = this.first
    this.first = new this.Node()
    this.first.content = content
    this.first.next = oldFirst
    this.count++
  }

  //遍历栈内内的所有元素
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

let test = new Stack()
test.push(111)
test.push(222)
test.push(333)
