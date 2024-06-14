import "./index.css";
import { GRAY, NULL } from "../../constants";

function OutputRow({ clue }) {
  let rowColor = clue.length === 4 && clue.every((value) => value === GRAY) ? NULL : GRAY;
  return (
    <div className="output-row" style={{ backgroundColor: rowColor }}>
      {
        rowColor === GRAY ? <>
          <div className="output-cell" style={{ backgroundColor: clue[0] || GRAY }}/>
          <div className="output-cell" style={{ backgroundColor: clue[1] || GRAY }}/>
          <div className="output-cell" style={{ backgroundColor: clue[2] || GRAY }}/>
          <div className="output-cell" style={{ backgroundColor: clue[3] || GRAY }}/>
        </>
        : null
      }

    </div>
  );
}

export default OutputRow;
