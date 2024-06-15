import "./index.css";
import OutputCell from "../Outputs/outputCell";

function Outputs({ clues, row }) {
  return (
    <div className="outputs">
      <OutputCell clue={clues[0]} />
      { row >= 1 ? <OutputCell clue={clues[1]} /> : null}
      { row >= 2 ? <OutputCell clue={clues[2]} /> : null}
      { row >= 3 ? <OutputCell clue={clues[3]} /> : null}
      { row >= 4 ? <OutputCell clue={clues[4]} /> : null}
      { row >= 5 ? <OutputCell clue={clues[5]} /> : null}
      { row >= 6 ? <OutputCell clue={clues[6]} /> : null}
      { row >= 7 ? <OutputCell clue={clues[7]} /> : null}
      { row >= 8 ? <OutputCell clue={clues[8]} /> : null}
      { row >= 9 ? <OutputCell clue={clues[9]} /> : null}
      { row >= 10 ? <OutputCell clue={clues[10]} /> : null}
    </div>
  );
}

export default Outputs;
