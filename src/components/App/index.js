import "./index.css";
import ColorKeyboard from "../ColorKeyboard";
import Inputs from "../Inputs";

function App() {
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
          <ColorKeyboard/>
        </div>
      </main>
    </div>
  );
}

export default App;
