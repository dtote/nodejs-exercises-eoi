const countingNumberofA = (phrase: string): number => {

  try {
    return phrase.toLowerCase()
      .split('')
      .filter(word => word == 'a')
      .length;

  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
};

console.log(countingNumberofA('banana'));