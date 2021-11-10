export const diceWithRandomFaces = (faces: number): number | Error => {
  try {
    return Math.floor(Math.random() * (faces + 1));
  } catch (err) {
    console.error('Number of faces not allowed, Error:', err);
    throw new Error(`Number of faces not allowed, Error: ${err}`);
  }
};

console.log(diceWithRandomFaces(6));