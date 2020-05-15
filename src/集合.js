class Set1 {
  constructor() {
    this.list = {}
  }


  //1.向集合中添加一个新的项
  add(value) {
    if(!this.has(value)) {
      this.list[value] = value
      
    }else {
      return false
    }

  }

  //2.判断集合中是否有该属性值
  has(value) {
    return this.list.hasOwnProperty(value)
  }

  //3。移除集合中的所有项
  clear() {
    this.list = {}
  }

  //4. 返回集合内的元素个数
  size() {
    return Object.keys(this.list).length
  }
  
  //5. 返回一个包含集合中所有值的数组
  values() {
    return Object.keys(this.list)
  }

  //6. 移除集合内的一个值
  remove(value) {
    delete this.list[value]
  }

  //7.并集操作
  union(otherSet) {
    const unionSet = new Set1()
    Object.keys(this.list).forEach(element => {
      unionSet.add(this.list[element])
    })
    Object.keys(otherSet.list).forEach(element => {
      unionSet.add(otherSet.list[element])
    })
    return unionSet.list
  }

  //8.交集操作
  interSection(otherSet) {
    const interSet = new Set1()
    Object.keys(this.list).forEach(element => {
      if(otherSet.has(element)) {interSet.add(element)}
    })
    return interSet.list
  }
  //9.差集操作
  different(otherSet) {
    const differentSet = new Set1()
    Object.keys(this.list).forEach(element => {
      if(!otherSet.has(element)) {differentSet.add(element)}
    })
    return differentSet.list
  }
  //10.子集操作
  isSon(otherSet) {
    let isSon = true
    Object.keys(this.list).forEach(element => {
      if(!otherSet.has(element)) {isSon = false}
    })

    return isSon
  }
}




let test =  new Set1()
let test2 = new Set1()
let test3 = new Set1()



test2.add('b')
test2.add([1,2,3])
test2.add('哈哈哈')

test.add({a: 'a'})
test.add('b')
test.add('嘤嘤嘤')
test.add([1,2,3])
test.add('a')

test3.add({a: 'a'})
test3.add('b')
test3.add('嘤嘤嘤')
test3.add([1,2,3])
test3.add('大坏蛋')
console.log(test2.list)
console.log(test.list)
console.log(test.isSon(test3))