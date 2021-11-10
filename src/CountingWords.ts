const countingWords = (phrase: string) => {
  let count = 0

  try {
    const wordsArray = phrase.split(' ').filter(word => word != '')
    
    if (wordsArray != []) {
      for (const index in wordsArray) {
        count++
      }
    }
    return count

  } catch (error) {
    throw new Error(`Error: ${error}`)
  }
}

console.log(countingWords(""))