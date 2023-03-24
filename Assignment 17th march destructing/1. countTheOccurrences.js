function countWords(str) {
  const words = str.split(" ");
  const wordCount = new Map();
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (wordCount.has(word)) {
      wordCount.set(word, wordCount.get(word) + 1);
    } else {
      wordCount.set(word, 1);
    }
  }
  return wordCount;
}

const inputString = "This is a test string to test the word count function";
const wordCountMap = countWords(inputString);
console.log(wordCountMap);


// output 

// Map(10) {
//     'This' => 1,
//     'is' => 1,
//     'a' => 1,
//     'test' => 2,
//     'string' => 1,
//     'to' => 1,
//     'the' => 1,
//     'word' => 1,
//     'count' => 1,
//     'function' => 1
//   }
