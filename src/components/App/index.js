import { useState } from "react";
import "./index.css";
import ColorKeyboard from "../ColorKeyboard";
import Inputs from "../Inputs";
import RulesModal from "../Modals/rulesModal";
import WinModal from "../Modals/winModal";
import LoseModal from "../Modals/loseModal";
import Outputs from "../Outputs";
import { NULL } from "../../constants";
import { resetBoard, resetClues, getClue } from "../../helpers";

function App() {
  let [row, setRow] = useState(1);
  let [column, setColumn] = useState(0);
  let [grid, setGrid] = useState(resetBoard());
  let [clues, setClues] = useState(resetClues());
  let [gameOver, setGameOver] = useState(false);
  let [showRules, setShowRules] = useState(true);
  let [showWin, setShowWin] = useState(false);
  let [showLose, setShowLose] = useState(false);

  const onColorClick = (color) => {
    if (column >= 0 && column < 4) {
      grid[row][column] = color;
      setGrid(grid);
      setColumn(column + 1);
    }
  }

  const onSubmit = () => {
    let guess = grid[row].slice();
    let answer = grid[0].slice();
    let clueCode = getClue(guess, answer);

    if (clueCode.length === 4 && clueCode.every((value) => value === NULL)){
      setShowWin(true);
      clues[row] = clueCode;
      setGameOver(true);
    } else if (row === 10) {
      setShowLose(true)
      setGameOver(true);
    } else {
      setRow(row + 1);
      setColumn(0);
      clues[row] = clueCode;
    }
  }

  const onDelete = () => {
    if (column >= 0 && column <= 4) {
      grid[row][column] = NULL;
      setColumn(column - 1);
    }
  }

  const resetGame = (mode) => {
    setShowLose(false);
    setShowWin(false);
    setShowRules(false);
    setRow(1);
    setColumn(0);
    setGrid(resetBoard(mode));
    setClues(resetClues());
    setGameOver(false);
  }

  return (
    <div className="App">
      <RulesModal showRules={showRules} resetGame={(mode) => resetGame(mode)}/>
      <WinModal showWin={showWin} resetGame={(mode) => resetGame(mode)} answer={grid[0]} rowCount={row}/>
      <LoseModal showLose={showLose} resetGame={(mode) => resetGame(mode)} answer={grid[0]}/>
      <header className="App-header">
        <h1>Master Mind</h1>
      </header>
      <main className="App-module-game">
        <div className="board-container">
          <Inputs grid={grid} gameOver={gameOver} setColumn={setColumn} row={row}/>
          <Outputs clues={clues} row={row}/>
        </div>
        <div className="color-keyboard-container">
          <ColorKeyboard
            onColorClick={ (color) => onColorClick(color) }
            onSubmit={ () => onSubmit() }
            onDelete={ () => onDelete() }
            disableSubmit={ grid[row].includes(NULL) }
            disableDelete={ grid[row][column] === NULL }
          />
        </div>
      </main>
    </div>
  );
}

export default App;
