import "./index.css";
import InputRow from "./inputRow";

function Inputs({ grid, gameOver, setColumn, row }) {
  return (
    <div className="inputs">
      <InputRow row={grid[0]} gameOver={gameOver} setColumn={setColumn} disabled={true}/>
      <InputRow row={grid[1]} setColumn={setColumn} disabled={row != 1}/>
      <InputRow row={grid[2]} setColumn={setColumn} disabled={row != 2}/>
      <InputRow row={grid[3]} setColumn={setColumn} disabled={row != 3}/>
      <InputRow row={grid[4]} setColumn={setColumn} disabled={row != 4}/>
      <InputRow row={grid[5]} setColumn={setColumn} disabled={row != 5}/>
      <InputRow row={grid[6]} setColumn={setColumn} disabled={row != 6}/>
      <InputRow row={grid[7]} setColumn={setColumn} disabled={row != 7}/>
      <InputRow row={grid[8]} setColumn={setColumn} disabled={row != 8}/>
      <InputRow row={grid[9]} setColumn={setColumn} disabled={row != 9}/>
      <InputRow row={grid[10]} setColumn={setColumn} disabled={row != 10}/>
    </div>
  );
}

export default Inputs;
