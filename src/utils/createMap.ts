const createMap = (
  cols: number,
  rows: number,
  prob: number,
  random: Function
) => {
  const emptyMap = Array<number[]>(rows).fill(Array<number>(cols).fill(0));
  const newMap = emptyMap.map((row) =>
    row.map((item) => -1 * +(random() < prob))
  );
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (newMap[i][j] === -1) {
        if (i + 1 < rows) {
          if (newMap[i + 1][j] !== -1) newMap[i + 1][j]++;
          if (j + 1 < cols && newMap[i + 1][j + 1] !== -1)
            newMap[i + 1][j + 1]++;
          if (j - 1 >= 0 && newMap[i + 1][j - 1] !== -1) newMap[i + 1][j - 1]++;
        }
        if (i - 1 >= 0) {
          if (newMap[i - 1][j] !== -1) newMap[i - 1][j]++;
          if (j + 1 < cols && newMap[i - 1][j + 1] !== -1)
            newMap[i - 1][j + 1]++;
          if (j - 1 >= 0 && newMap[i - 1][j - 1] !== -1) newMap[i - 1][j - 1]++;
        }
        if (j + 1 < cols && newMap[i][j + 1] !== -1) newMap[i][j + 1]++;
        if (j - 1 >= 0 && newMap[i][j - 1] !== -1) newMap[i][j - 1]++;
      }
    }
  }
  return newMap;
};

export default createMap;
