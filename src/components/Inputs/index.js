import "./index.css";
import InputRow from "./inputRow";

function Inputs({ grid }) {
  return (
    <div className="inputs">
      <InputRow row={grid[0]}/>
      <InputRow row={grid[1]}/>
      <InputRow row={grid[2]}/>
      <InputRow row={grid[3]}/>
      <InputRow row={grid[4]}/>
      <InputRow row={grid[5]}/>
      <InputRow row={grid[6]}/>
      <InputRow row={grid[7]}/>
      <InputRow row={grid[8]}/>
      <InputRow row={grid[9]}/>
      <InputRow row={grid[10]}/>
    </div>
  );
}

export default Inputs;
