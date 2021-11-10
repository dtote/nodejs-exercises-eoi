const countingWords = (phrase: string) => {
  let count = 0

  const wordsArray = phrase.split(' ')

  for (const index in wordsArray) {
    count++
  }
  
  return count
}

console.log(countingWords("This is a test of a phrase"))