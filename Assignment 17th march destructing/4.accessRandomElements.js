function extractElements(arr) {
    const [first, second, ...rest] = arr;
    const last = rest.pop();
    return [first, second, last];
  }

  const arr1 = [1, 2, 3, 4, 5];
  console.log(extractElements(arr1)); // [1, 2, 5]
  
  const arr2 = [10, 20, 30, 40];
  console.log(extractElements(arr2)); // [10, 20, 40]
  