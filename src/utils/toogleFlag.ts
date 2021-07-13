import { LandState } from "./enums";

const toogleFlag = (
  i: number,
  j: number,
  mapState: number[][],
  setMapState: Function
) => {
  const newMapState = mapState.map((row) => row.map((item) => item));
  if (newMapState[i][j] === LandState.UNDISCOVERED)
    newMapState[i][j] = LandState.FLAGGED;
  else if (newMapState[i][j] === LandState.FLAGGED)
    newMapState[i][j] = LandState.UNDISCOVERED;
  else return;
  setMapState(newMapState);
};
export default toogleFlag;
