let list = []



function queue(content, pirority) {

  function queueObject(content, pirority) {
    this.content = content
    this.pirority = pirority
  }

  let newItem = new queueObject(content, pirority)

  if(list.length === 0) {
    list.push(newItem)
  }
  
  let isAdded = false
  for (let index = 0; index < list.length; index++) {
    if(list[index].pirority < newItem.pirority) {
      list.splice(index, 0, newItem)
      isAdded = true
      break
    }    
  }
  if(!isAdded) {
    list.push(newItem)
  }
  console.log(list)
}

queue('lisi', 10)