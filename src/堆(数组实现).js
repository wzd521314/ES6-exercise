//左子节点的下标为父节点的2K,右子节点的下标为父节点的2K+1，父节点为子节点下标的Math.floor(k/2)
class Heap {
  constructor (a) {
    this.list = []
    for(let i = 0; i<a.length; i++) {
      this.list[i+1] = a[i]
    }
  }
}


let test = new Heap([1,6,4,8,9])
console.log(test)