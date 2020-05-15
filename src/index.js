//二叉树搜索
class binaryTree {
  constructor() {
    this.root = null
  }


  //创建节点函数
  createNode(key, value) {
    this.key = key
    this.value = value
    this.left = null
    this.right = null
  }
  // 比较节点函数
  compareNode(oldNode, newNode) {
    //插入节点大于原节点时，往右
    if(newNode.key > oldNode.key) {
      if(oldNode.right == null) {
        oldNode.right = newNode
      }else {
        this.compareNode(oldNode.right, newNode)
      }
    //插入节点小于原节点时，往左
    }else if (newNode.key < oldNode.key) {
      if(oldNode.left == null) {
        oldNode.left = newNode
      }else {
        this.compareNode(oldNode.left, newNode)
      }
    //插入节点等于原节点时，执行修改操作
    }else {
      console.log('已存在此元素')
      return false
    }
  }
  //先序遍历树中节点函数
  preTraverse(node, handle) {
    if(node !== null) {
      handle(node.key, node.value)
      this.preTraverse(node.left, handle)
      this.preTraverse(node.right, handle)
    }
  }
  //中序遍历树中节点函数
  inTraverse(node, handle) {
    if(node !== null) {
      this.inTraverse(node.left, handle)
      handle(node.key, node.value)
      this.inTraverse(node.right, handle)
    }
  }
  //后续遍历树中节点函数
  postTraverse(node, handle) {
    if(node !==null) {
      this.postTraverse(node.left, handle)
      this.postTraverse(node.right, handle)
      handle(node.key, node.value)
    }
  }
  //1.向树中插入&修改一个key
  insert(key, value) {
    let newNode = new this.createNode(key, value)
    //1.1判断根节点是否存在，如不存在则将此节点设为根节点
    if(this.root == null) {
      this.root = newNode
      return true
    }
    //1.2如果根节点存在时，则与根节点key值大小进行判断，小往左，大往右，不断重复
    this.compareNode(this.root, newNode)
  }
  //2.先序遍历树中所有元素
  preOrderTraverse(handle) {
    this.preTraverse(this.root, handle)
  }
  //3.中序遍历树中所有元素
  inOrderTraverse(handle) {
    this.inTraverse(this.root, handle)
  }
  //4.后序遍历树中所有元素
  postOrderTraverse(handle) {
    this.postTraverse(this.root, handle)
  }
}


let test = new binaryTree()
let result = ''

function handle(key, value) {
  console.log(1)
  result += `${key}:${value}`
}


test.insert(11, 'aaa')
test.insert(7, 'aaa')
test.insert(15, 'aaa')
test.insert(5, 'aaa')
test.insert(3, 'aaa')
test.insert(9, 'aaa')
test.insert(8, 'aaa')
test.insert(10, 'aaa')
test.insert(13, 'aaa')
test.insert(12, 'aaa')
test.insert(14, 'aaa')
test.insert(20, 'aaa')
test.insert(18, 'aaa')
test.insert(25, 'aaa')
test.postOrderTraverse(handle)
console.log(result)