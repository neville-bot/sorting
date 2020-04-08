const split = array => {
  let firstHalf;
  let secondHalf;
  if (array.length === 0) return array;
  if (array.length === 1) return array;

  firstHalf = array.slice(0, Math.floor(array.length / 2));
  secondHalf = array.slice(Math.round((array.length - 1) / 2));

  return [firstHalf, secondHalf];
};
const merge = (arrayOne, arrayTwo) => {
  let array = [];
  let arrayOneIndex = 0;
  let arrayTwoIndex = 0;

  while (arrayOneIndex < arrayOne.length && arrayTwoIndex < arrayTwo.length) {
    if (arrayOne[arrayOneIndex] < arrayTwo[arrayTwoIndex]) {
      array.push(arrayOne[arrayOneIndex]);
      arrayOneIndex++;
    } else {
      array.push(arrayTwo[arrayTwoIndex]);
      arrayTwoIndex++;
    }
  }
  return array
    .concat(arrayOne.slice(arrayOneIndex))
    .concat(arrayTwo.slice(arrayTwoIndex));
};

const mergeSort = array => {
  console.log(array);
  if (array.length === 0) return array;
  if (array.length === 1) return array;
  const [arrayOne, arrayTwo] = split(array);
  return merge(mergeSort(arrayOne), mergeSort(arrayTwo));
};
