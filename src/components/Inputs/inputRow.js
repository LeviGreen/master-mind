import "./index.css";
import { BLACK } from "../../constants";

function InputRow({ row, gameOver = true }) {
  let row0 = gameOver ? row[0] : BLACK;
  let row1 = gameOver ? row[1] : BLACK;
  let row2 = gameOver ? row[2] : BLACK;
  let row3 = gameOver ? row[3] : BLACK;

  return (
    <div className="input-row">
      <div className="input-cell" style={{ backgroundColor: row0 }}/>
      <div className="input-cell" style={{ backgroundColor: row1 }}/>
      <div className="input-cell" style={{ backgroundColor: row2 }}/>
      <div className="input-cell" style={{ backgroundColor: row3 }}/>
    </div>
  );
}

export default InputRow;
