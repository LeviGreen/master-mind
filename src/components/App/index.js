import { useState } from "react";
import "./index.css";
import ColorKeyboard from "../ColorKeyboard";
import Inputs from "../Inputs";
import RulesModal from "../Modals/rulesModal";
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

  const onColorClick = (color) => {
    if (column < 4) {
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
      console.log("You win!");
      clues[row] = clueCode;
      setColumn(0);
      setGameOver(true);
    } else if (row === 10) {
      console.log("You lose!");
      setGameOver(true);
    } else {
      setRow(row + 1);
      setColumn(0);
      clues[row] = clueCode;
    }
  }

  const onDelete = () => {
    if (column > 0 && column <= 4) {
      grid[row][column - 1] = NULL;
      setColumn(column - 1);
    }
  }

  return (
    <div className="App">
      <RulesModal showRules={showRules} setShowRules={setShowRules}/>
      <header className="App-header">
        <h1>Master Mind</h1>
      </header>
      <main className="App-module-game">
        <div className="board-container">
          <Inputs grid={grid} gameOver={gameOver} />
          <Outputs clues={clues} />
        </div>
        <div className="color-keyboard-container">
          <ColorKeyboard
            onColorClick={ (color) => onColorClick(color) }
            onSubmit={ () => onSubmit() }
            onDelete={ () => onDelete() }
            disableSubmit={ grid[row].includes(NULL) }
            disableDelete={ column === 0 }
          />
        </div>
      </main>
    </div>
  );
}

export default App;
