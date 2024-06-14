import "./index.css";
import { BLACK, GRAY, KEY_COLORS, NULL } from "../../constants";

function OutputRow({ clue }) {
  return (
    <div className="output-row">
      <div className="output-cell" style={{ backgroundColor: clue[0] || GRAY }}/>
      <div className="output-cell" style={{ backgroundColor: clue[1] || GRAY }}/>
      <div className="output-cell" style={{ backgroundColor: clue[2] || GRAY }}/>
      <div className="output-cell" style={{ backgroundColor: clue[3] || GRAY }}/>
    </div>
  );
}

export default OutputRow;
