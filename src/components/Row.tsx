import { FC, useContext } from "react";
import classes from "./Row.module.css";
import Land from "./Land";
import selectContext from "../contexts/selectContext";

type PropType = {
  size: number;
  rowNumber: number;
  rowState: number[];
  rowMap: number[];
  ratio: number;
};

const Row: FC<PropType> = ({ size, rowNumber, rowState, rowMap, ratio }) => {
  let maxWidth = Math.min(ratio * (window.innerHeight - 90), window.innerWidth) - 20;
  let maxHeight = Math.min(Math.floor(maxWidth / size), 75);
  let maxWidthLand = Math.min(Math.floor(maxWidth / size), 75);
  maxWidth = maxWidthLand * size;
  let rowStyle = { width: maxWidth, height: maxHeight };
  let landStyle = { height: maxWidthLand, width: maxWidthLand };
  let { select, toogleFlag } = useContext(selectContext);
  let row =
    rowMap &&
    rowState &&
    [...new Array(size)].map((item, i) => (
      <Land
        landState={rowState[i]}
        value={rowMap[i]}
        style={landStyle}
        key={i}
        className={(i + rowNumber) % 2 ? classes.LandOdd : classes.LandEven}
        onClick={() => select(rowNumber, i)}
        toogleFlag={() => toogleFlag(rowNumber, i)}
        fs={maxWidthLand}
      ></Land>
    ));
  return (
    <div style={rowStyle} className={classes.Row}>
      {row}
    </div>
  );
};

export default Row;
