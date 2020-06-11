//哈希表

class hashList {
  constructor() {
    this.storage = []
    this.limit = 7
    this.count = 0
  }

  //判断一个数是否为质数
  isPrime(number) {

    if(number === 1) {
      return false
    }


    let limitNumber = Math.ceil((Math.sqrt(number)))
    for (let index = 2; index <= limitNumber; index++) {
      if(number % index === 0) {
        return false
      }

      
    }
    return true
  }

  //求最近质数函数
  getPrime(number) {
    while(!this.isPrime(number)) {
      number += 1
    }
    return number
  }
  
  //哈希函数
  hashed(str, size) {
    let hashCode = 0
    for(let i = 0 ; i < str.length; i++) {
      hashCode = 37 * hashCode + str.charCodeAt(i)
    }
    return hashCode % size
  }
  //1.插入&修改操作
  put (key, value) {
    //计算出key值哈希化后的index
    let index = this.hashed(key, this.limit)
    console.log(index)
    let basket = []
      //判断哈希表内对应的index处是否有值，没有则赋予一个新的空数组
    if(this.storage[index] == null) {
      this.storage[index] = basket
    }
      //取得对应index内的数组
    basket = this.storage[index]
      //遍历取出的数组,如果有和key相同的值时，这次操作为修改操作，没有则为插入操作
    for(let i of basket) {
      if(i[0] === key) {
        i[1] = value

        return
      }
    }

    basket.push([key, value])
    this.count += 1
    
    //判断loadFactor是否大于0.75，是的话进行扩容
    if(this.count > this.limit * 0.75) {
      this.resize(this.limit * 2)
    }
  }

  //2.获取操作
  get(key) {
    let index = this.hashed(key, this.limit)

    //如果对应index为空，则直接返回
    if(this.storage[index] == null) {
      console.log('没有这个数据哦')
      return
    }
    //如果对应index有内容，则依次遍历其中的元素，如果有key值相同的则返回value
    for (const iterator of this.storage[index]) {
      if(iterator[0] === key) {
        return iterator[1]
      }
    }
    //没有则查无此数据
    console.log('没有这个数据哦')
  }

  //3.删除操作
  remove(key) {
    let index = this.hashed(key, this.limit)

    //如果对应index为空，则直接返回
    if(this.storage[index] == null) {
      console.log('没有这个数据哦')
      return
    }
    //如果对应index有内容，则依次遍历其中的元素，如果有key值相同的则返回value
    for (let i = 0; i < this.storage[index].length; i++) {
      if(this.storage[index][i][0] === key) {
        this.storage[index].splice(i,1)
        this.count -= 1

        //判断loadFactor是否小于0.25，是的话进行缩容，但最小容量不能低于7
        if(this.limit >7 && this.count < this.limit * 0.25) {
          this.resize(this.limit / 2)
        }
        return
      }
    }
    
  }

  //4.扩容操作
  resize(number) {
    //首先在扩容之前将原来的哈希表保存下来
    let oldStorage = this.storage
    //计算得到新的扩容后的长度
    this.limit = this.getPrime(number)
    this.storage = []
    this.count = 0

    //将原来的哈希表中的内容重新赋值给新的数组
    for (const iterator of oldStorage) {
      if(iterator == null) {
        continue
      }
      
      for (let index = 0; index < iterator.length; index++) {
        this.put(iterator[index][0], iterator[index][1])
      }
    }

  }
}

var test = new hashList()

test.put('abb', 'aaa')
test.put('ccc', 222)
test.put('cdb', 111)
test.put('cdba', 111)
test.put('ceba', 111)
test.put('cfba', 111)

//console.log(test.isPrime(45))
console.log(test)