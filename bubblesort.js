function bubbleSort(array) {
  if (array.length === 0) return array
  if (array.length === 1) return array

  // return array.sort((a, b) => {
  //   if (a < b) return -1
  //   if (a === b) return 0
  //   if (a > b) return 1
  // })

  const sorting = {}
  sorting.swap = function () {
    return "swaped"
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}
