function swap(firstNum, secondNum) {
  console.log("before", firstNum, secondNum)
  const temp = firstNum
  firstNum = secondNum
  secondNum = temp
  console.log("after", firstNum, secondNum)
}

function bubbleSort(array) {
  if (array.length === 0) return array
  if (array.length === 1) return array

  // return array.sort((a, b) => {
  //   if (a < b) return -1
  //   if (a === b) return 0
  //   if (a > b) return 1
  // })

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        // let temp = array[j]
        // array[j] = array[j + 1]
        // array[j + 1] = temp
        console.log("before swap called", array[j], array[j + 1])
        swap(array[j], array[j + 1])

        console.log("after swap called", array[j], array[j + 1])
      }
    }
  }
  return array
}
