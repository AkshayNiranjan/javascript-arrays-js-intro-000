var chocolateBars= ["snickers","hundred grand","kitkat","skittles"]
function addElementToBeginningOfArray(arr,add){
  return [add,...arr]
}
function destructivelyAddElementToBeginningOfArray(arr,add){
  arr.unshift(add)
}
function addElementToEndOfArray(arr,add){
  return [arr,add]
}
function destructivelyAddElementToEndOfArray(arr,add){
  arr.push(add)
}
function accessElementInArray(arr,ind){
  return arr[ind]
}
function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift()
  return arr
}
function removeElementFromBeginningOfArray(arr){
  return arr.slice(1)
}
