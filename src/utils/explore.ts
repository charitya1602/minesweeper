import { LandState } from "../utils/enums";

const explore = (
  i: number,
  j: number,
  exploredMap: number[][],
  map: number[][]
) => {
  exploredMap[i][j] = LandState.DISCOVERED;
  if (map[i][j] === 0) {
    const rows = exploredMap.length;
    const cols = exploredMap[0].length;
    if (i + 1 < rows) {
      if (exploredMap[i + 1][j] === LandState.UNDISCOVERED)
        explore(i + 1, j, exploredMap, map);
      if (j + 1 < cols && exploredMap[i + 1][j + 1] === LandState.UNDISCOVERED)
        explore(i + 1, j + 1, exploredMap, map);
      if (j - 1 >= 0 && exploredMap[i + 1][j - 1] === LandState.UNDISCOVERED)
        explore(i + 1, j - 1, exploredMap, map);
    }
    if (i - 1 >= 0) {
      if (exploredMap[i - 1][j] === LandState.UNDISCOVERED) explore(i - 1, j, exploredMap, map);
      if (j + 1 < cols && exploredMap[i - 1][j + 1] === LandState.UNDISCOVERED)
        explore(i - 1, j + 1, exploredMap, map);
      if (j - 1 >= 0 && exploredMap[i - 1][j - 1] === LandState.UNDISCOVERED)
        explore(i - 1, j - 1, exploredMap, map);
    }
    if (j + 1 < cols && exploredMap[i][j + 1] === LandState.UNDISCOVERED)
      explore(i, j + 1, exploredMap, map);
    if (j - 1 >= 0 && exploredMap[i][j - 1] === LandState.UNDISCOVERED)
      explore(i, j - 1, exploredMap, map);
  }
};

export default explore;
