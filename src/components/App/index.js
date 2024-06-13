import "./index.css";
import ColorKeyboard from "../ColorKeyboard";
import Inputs from "../Inputs";
import { useState } from "react";
import { NULL } from "../../constants";

function App() {
  let [row, setRow] = useState(1);
  let [column, setColumn] = useState(0);
  let [grid, setGrid] = useState([
    [NULL, NULL, NULL, NULL],
    [NULL, NULL, NULL, NULL],
    [NULL, NULL, NULL, NULL],
    [NULL, NULL, NULL, NULL],
    [NULL, NULL, NULL, NULL],
    [NULL, NULL, NULL, NULL],
    [NULL, NULL, NULL, NULL],
    [NULL, NULL, NULL, NULL],
    [NULL, NULL, NULL, NULL],
    [NULL, NULL, NULL, NULL],
    [NULL, NULL, NULL, NULL]
  ]);

  const onColorClick = (color) => {
    if (column < 4) {
      let newGrid = grid;
      newGrid[row][column] = color;
      setGrid(newGrid);
      setColumn(column + 1);
    }
  }

  const onSubmit = () => {
    // getGuessOutput();

    let isCorrectGuess = false

    if (isCorrectGuess == true) {
      console.log("You win!")
    } else if (row < 10) {
      setRow(row + 1);
      setColumn(0);
    } else {
      console.log("You lose!")
    }
  }

  const onDelete = () => {
    if (column > 0 && column <= 4) {

      let newGrid = grid;
      newGrid[row][column - 1] = NULL;
      setGrid(newGrid);
      setColumn(column - 1);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Master Mind</h1>
      </header>
      <main className="App-module-game">
        <div className="board-container">
          <Inputs grid={grid} />
          <div className="outputs"></div>
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
