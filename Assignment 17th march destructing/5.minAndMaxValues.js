function findMinMax(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return { max, min };
  }

const arr1 = [5, 2, 7, 1, 9];
console.log(findMinMax(arr1)); // { max: 9, min: 1 }

const arr2 = [10, -5, 20, 30, -15];
console.log(findMinMax(arr2)); // { max: 30, min: -15 }
