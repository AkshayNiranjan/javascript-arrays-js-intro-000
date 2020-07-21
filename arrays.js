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
