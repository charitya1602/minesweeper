import explore from "./explore";
import { GameState, LandState } from "../utils/enums";

const select = (
  i: number,
  j: number,
  totalArea: number,
  mapState: LandState[][],
  setMapState: Function,
  gameMap: number[][],
  gameOver: Function
) => {
  if (
    mapState[i][j] === LandState.DISCOVERED ||
    mapState[i][j] === LandState.FLAGGED
  )
    return;
  const oldState = mapState.map((arr) => arr.map((item) => item));
  if (gameMap[i][j] === -1) {
    gameOver(GameState.LOST);
    return;
  }

  if (gameMap !== null) explore(i, j, oldState, gameMap);
  const found = oldState.reduce(
    (total, item) =>
      total + item.reduce((sum, ii) => sum + (ii === LandState.DISCOVERED?1:0), 0),
    0
  );
  if (found === totalArea) {
    gameOver(GameState.WON);
    return;
  }
  setMapState(oldState);
};

export default select;
