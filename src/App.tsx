import classes from "./App.module.css";
import { FC, useCallback, useEffect, useState } from "react";
import Options from "./components/Options";
import { Difficulty, GameState, DifficultyType, LandState } from "./utils/enums";
import Game from "./container/Game";
import createMap from "./utils/createMap";
import random from "./utils/seedRandom";
import selectContext from "./contexts/selectContext";
import select from "./utils/select";
import toogleFlag from "./utils/toogleFlag";

const App: FC = () => {
  const [gameDifficulty, setGameDifficulty] = useState<DifficultyType>("EASY");
  const [gameMap, setGameMap] = useState<number[][]>([[]]);
  const [totalArea, setTotalArea] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<GameState>(GameState.RUNNING);
  const [mapState, setMapState] = useState<LandState[][]>([[]]);

  const resetGameMap = useCallback(() => {
    const rows = Difficulty[gameDifficulty].rows;
    const cols = Difficulty[gameDifficulty].cols;
    const newMapState = Array(rows).fill(Array(cols).fill(LandState.UNDISCOVERED));
    setMapState(newMapState);
  }, [gameDifficulty]);

  const createNewMap = (gd: DifficultyType) => {
    if(gd !== gameDifficulty){
      setGameDifficulty(gd);
      return;
    }
    resetGameMap();
    const rows = Difficulty[gd].rows;
    const cols = Difficulty[gd].cols;
    const newMap = createMap(cols, rows, 0.1, random);
    let total = 0;
    newMap.forEach((row) =>
      row.forEach((item) => (total = total + (item !== -1 ? 1 : 0)))
    );
    setTotalArea(total);
    setGameMap(newMap);
  };

  useEffect(() => {
    resetGameMap();
    const rows = Difficulty[gameDifficulty].rows;
    const cols = Difficulty[gameDifficulty].cols;
    const newMap = createMap(cols, rows, 0.1, random);
    let total = 0;
    newMap.forEach((row) =>
      row.forEach((item) => (total = total + (item !== -1 ? 1 : 0)))
    );
    setTotalArea(total);
    setGameMap(newMap);
  }, [gameDifficulty, resetGameMap]);

  let textStyle;
  if (window.innerWidth < 400) {
    textStyle = { display: "none" };
  }

  const gameOver = (state: GameState) => setIsGameOver(state);
  return (
    <selectContext.Provider
      value={{
        select: (i, j) =>
          select(i, j, totalArea, mapState, setMapState, gameMap, gameOver),
        toogleFlag: (i, j) => toogleFlag(i, j, mapState, setMapState),
      }}
    >
      <div className={classes.Navbar}>
        <div className={classes.ButtonContainer}>
          <button
            onClick={() => setGameDifficulty("EASY")}
            className={classes.Button}
          >
            <span style={textStyle}>Easy</span>
            9x9
          </button>
          <button
            onClick={() => setGameDifficulty("INTERMEDIATE")}
            className={classes.Button}
          >
            <span style={textStyle}> Intermediate</span> 16x16
          </button>
          <button
            onClick={() => setGameDifficulty("HARD")}
            className={classes.Button}
          >
            <span style={textStyle}>Expert</span>
            16x30
          </button>
        </div>
      </div>
      <Game
        gameMap={gameMap}
        mapState={mapState}
        gameOver={setIsGameOver}
        cols={Difficulty[gameDifficulty].cols}
        rows={Difficulty[gameDifficulty].rows}
        totalArea={totalArea}
      />
      {isGameOver !== GameState.RUNNING && (
        <Options
          message={isGameOver === GameState.WON ? "You Won" : "You Lost"}
          resetThisGame={() => {
            resetGameMap();
            setIsGameOver(GameState.RUNNING);
          }}
          startNewGame={(n: DifficultyType) => {
            createNewMap(n);
            setIsGameOver(GameState.RUNNING);
          }}
        />
      )}
    </selectContext.Provider>
  );
};

export default App;
