
const Difficulty = {
  EASY: { rows: 9, cols: 9 },
  INTERMEDIATE: { rows: 16, cols: 16 },
  HARD: { rows: 16, cols: 30 },
};
enum GameState {
  RUNNING,
  LOST,
  WON,
}
enum LandState{
  FLAGGED,
  DISCOVERED,
  UNDISCOVERED
}
export type DifficultyType = 'EASY' | 'INTERMEDIATE' | 'HARD';

export { Difficulty, GameState, LandState };
