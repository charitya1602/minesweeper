import { FC, MouseEventHandler } from "react";
import { LandState } from "../utils/enums";
import classes from "./Row.module.css";

type PropType = {
  className: string;
  value: number;
  landState: number;
  style: any;
  onClick: MouseEventHandler;
  fs:number;
  toogleFlag: Function;
};

const Land: FC<PropType> = ({
  value,
  landState,
  style,
  className,
  onClick,
  toogleFlag,
  fs
}) => {
  let landStyle = "";
  switch (landState) {
    case LandState.DISCOVERED:
      landStyle = classes.Discovered;
      break;
    case LandState.UNDISCOVERED:
      landStyle = classes.UnDiscovered;
      break;
    case LandState.FLAGGED:
      landStyle = classes.Flagged;
      break;
  }
  let number = [
    classes.Zero,
    classes.One,
    classes.Two,
    classes.Three,
    classes.Four,
    classes.Five,
    classes.Six,
    classes.Seven,
    classes.Eight,
  ];
  return (
    <div className={classes.Land + " " + landStyle}>
      <div
        className={className}
        style={style}
        onClick={onClick}
        onContextMenu={(e) => {
          e.preventDefault();
          toogleFlag();
        }}
      >
        <div className={number[value]} style={{fontSize: 0.5*fs, margin: "auto"}}>{
          landState === LandState.DISCOVERED && value !== 0 && value 
        }</div>
      </div>
    </div>
  );
};

export default Land;
