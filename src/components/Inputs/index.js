import React, { useContext } from 'react';
import "./index.css";
import InputRow from "./inputRow";
import MasterMindContext from '../MasterMindContext';

function Inputs({ grid, gameOver }) {
  const { row } = useContext(MasterMindContext);

  return (
    <div className="inputs">
      <InputRow rowValue={grid[0]} gameOver={gameOver} disabled={true}/>
      { row >= 1 ? <InputRow rowValue={grid[1]}/> : null}
      { row >= 2 ? <InputRow rowValue={grid[2]}/> : null}
      { row >= 3 ? <InputRow rowValue={grid[3]}/> : null}
      { row >= 4 ? <InputRow rowValue={grid[4]}/> : null}
      { row >= 5 ? <InputRow rowValue={grid[5]}/> : null}
      { row >= 6 ? <InputRow rowValue={grid[6]}/> : null}
      { row >= 7 ? <InputRow rowValue={grid[7]}/> : null}
      { row >= 8 ? <InputRow rowValue={grid[8]}/> : null}
      { row >= 9 ? <InputRow rowValue={grid[9]}/> : null}
      { row >= 10 ? <InputRow rowValue={grid[10]}/> : null}
    </div>
  );
}

export default Inputs;
