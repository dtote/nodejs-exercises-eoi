export const dice = (a: number, b: number): number => {
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(dice(1, 6));
