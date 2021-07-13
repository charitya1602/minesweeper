import { FC, FormEventHandler } from "react";
import classes from "./Options.module.css";

const Options: FC<{
  startNewGame: Function;
  resetThisGame: FormEventHandler;
  message: string;
}> = (props) => {
  let textStyle = {};
  if (window.innerWidth < 400) {
    textStyle = { display: "none" };
  }
  return (
    <div className={classes.Container}>
      <div className={classes.Card}>
        <h3 className={classes.Label + " " + classes.Title}>GameOver</h3>
        <h4 className={classes.Label}>{props.message}</h4>
        <div className={classes.ButtonContiner}>
          <button
            onClick={() => props.startNewGame("EASY")}
            className={classes.Submit}
          >
            <span style={textStyle}>Easy</span> 9x9
          </button>
          <button
            onClick={() => props.startNewGame("INTERMEDIATE")}
            className={classes.Submit}
          >
            <span style={textStyle}>Intermediate</span>16x16
          </button>
          <button
            onClick={() => props.startNewGame("HARD")}
            className={classes.Submit}
          >
            <span style={textStyle}>Hard</span>16x30
          </button>
        </div>
        <button className={classes.Cancel} onClick={props.resetThisGame}>
          Restart This Game
        </button>
      </div>
    </div>
  );
};

export default Options;
