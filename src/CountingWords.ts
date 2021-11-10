const countingWords = (phrase: string): number => {

  try {
    return phrase.split(' ').filter(word => word != '').length

  } catch (error) {
    throw new Error(`Error: ${error}`)
  }
}

console.log(countingWords("This is a test"))
