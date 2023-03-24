function removeDuplicates(arr) {
    const set = new Set(arr);
    return set;
  }

  const inputArray = [1, 2, 3, 2, 4, 1];
  const uniqueSet = removeDuplicates(inputArray);
  console.log(uniqueSet);

  
// output
//   Set(4) { 1, 2, 3, 4 }