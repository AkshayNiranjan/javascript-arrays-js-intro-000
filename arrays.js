var chocolateBars= ["snickers","hundred grand","kitkat","skittles"]
function addElementToBeginningOfArray(arr,add){
  [add,...arr]
}
destructivelyAddElementToBeginningOfArray(arr,add){
  arr.unshift(add)
}
