import { FC } from "react";
import Row from "../components/Row";
import classes from "./Game.module.css";

type PropType = {
  gameMap: number[][];
  rows: number;
  cols: number;
  gameOver: Function;
  totalArea: number;
  mapState: number[][];
};

const Game: FC<PropType> = ({
  gameMap,
  cols,
  rows,
  mapState,
}) => {
  return (
    gameMap && (
      <div className={classes.Container}>
        {[...new Array(rows)].map((item, i) => (
          <Row
            size={cols}
            rowNumber={i}
            key={i}
            rowState={mapState[i]}
            rowMap={gameMap[i]}
            ratio={gameMap[0].length/gameMap.length}
          />
        ))}
      </div>
    )
  );
};
export default Game;
