//binary search

function binSearch(arr, value, start, end){
  let start = start === null ? 0: start
  let end = end === null ? arr.length: end
  
  if (start > end( {
    return -1
  }
  
  const index = Math.floor((start + end)/2)
  const item = arr[index]
  
  if (item == value){
    return index
  }
  else if (item < value){ 
    return binSearch(array, value, index + 1, end)
  }
  else if (item > value){
    return binSearch(array, value, index - 1)
  }
} 
