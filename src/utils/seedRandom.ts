const seedRandom = (seed: number) => () => {
  let x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
};

export default seedRandom(Math.floor(Math.random() * 1000));