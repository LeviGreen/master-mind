import "./index.css";
import InputRow from "./inputRow";

function Inputs({ grid, gameOver, setColumn, row }) {
  return (
    <div className="inputs">
      <InputRow row={grid[0]} gameOver={gameOver} setColumn={setColumn} disabled={true}/>
      { row >= 1 ? <InputRow row={grid[1]} setColumn={setColumn}/> : null}
      { row >= 2 ? <InputRow row={grid[2]} setColumn={setColumn}/> : null}
      { row >= 3 ? <InputRow row={grid[3]} setColumn={setColumn}/> : null}
      { row >= 4 ? <InputRow row={grid[4]} setColumn={setColumn}/> : null}
      { row >= 5 ? <InputRow row={grid[5]} setColumn={setColumn}/> : null}
      { row >= 6 ? <InputRow row={grid[6]} setColumn={setColumn}/> : null}
      { row >= 7 ? <InputRow row={grid[7]} setColumn={setColumn}/> : null}
      { row >= 8 ? <InputRow row={grid[8]} setColumn={setColumn}/> : null}
      { row >= 9 ? <InputRow row={grid[9]} setColumn={setColumn}/> : null}
      { row >= 10 ? <InputRow row={grid[10]} setColumn={setColumn}/> : null}
    </div>
  );
}

export default Inputs;
