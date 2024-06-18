import React, { useContext } from 'react';
import "./index.css";
import { GRAY } from "../../constants";
import MasterMindContext from '../MasterMindContext';

function InputRow({ rowValue, gameOver = true, disabled }) {
  const { setColumn } = useContext(MasterMindContext);

  let row0 = gameOver ? rowValue[0] : GRAY;
  let row1 = gameOver ? rowValue[1] : GRAY;
  let row2 = gameOver ? rowValue[2] : GRAY;
  let row3 = gameOver ? rowValue[3] : GRAY;

  return (
    <div className="input-row">
      <button className="input-cell" style={{ backgroundColor: row0 }} onClick={() => setColumn(0)} disabled={disabled}/>
      <button className="input-cell" style={{ backgroundColor: row1 }} onClick={() => setColumn(1)} disabled={disabled}/>
      <button className="input-cell" style={{ backgroundColor: row2 }} onClick={() => setColumn(2)} disabled={disabled}/>
      <button className="input-cell" style={{ backgroundColor: row3 }} onClick={() => setColumn(3)} disabled={disabled}/>
    </div>
  );
}

export default InputRow;
