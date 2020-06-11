class Bag {
  constructor() {
    this.first = null
  }

  Node() {
    this.content = null
    this.next = null
  }
  //将元素添加至背包内
  add(content) {
    let oldFirst = this.first
    this.first = new this.Node()
    this.first.content = content
    this.first.next = oldFirst
  }
  //遍历背包内所有元素
  iterator() {
    if(this.fist) {
      return false
    }else {
      let node = this.first
      let result = ''
      do {
        console.log(node)
        result += node.content
        node = node.next
      } while (node);

      return result
    }
  }
}

let test = new Bag()

test.add(111)
test.add(222)
test.add(333)