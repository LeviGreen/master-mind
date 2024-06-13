import "./index.css";
import ColorKeyboard from "../ColorKeyboard";
import Inputs from "../Inputs";
import { useState } from "react";

function App() {
  // const [color, setColor] = useState(null);
  // const [row, setRow] = useState(0);
  // const [column, setColumn] = useState(0);

  const onColorClick = (color) => {
    console.log(`${color} clicked!`);
  }

  const onSubmit = () => {
    console.log("Enter clicked!");
  }

  const onDelete = () => {
    console.log("Delete clicked!");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Master Mind</h1>
      </header>
      <main className="App-module-game">
        <div className="board-container">
          <Inputs/>
          <div className="outputs"></div>
        </div>
        <div className="color-keyboard-container">
          <ColorKeyboard
            onColorClick={(color) => onColorClick(color)}
            onSubmit={() => onSubmit()}
            onDelete={() => onDelete()}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
