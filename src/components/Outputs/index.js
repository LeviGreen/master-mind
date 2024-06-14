import "./index.css";
import OutputCell from "../Outputs/outputCell";

function Outputs({ clues }) {
  return (
    <div className="outputs">
      <OutputCell clue={clues[0]} />
      <OutputCell clue={clues[1]} />
      <OutputCell clue={clues[2]} />
      <OutputCell clue={clues[3]} />
      <OutputCell clue={clues[4]} />
      <OutputCell clue={clues[5]} />
      <OutputCell clue={clues[6]} />
      <OutputCell clue={clues[7]} />
      <OutputCell clue={clues[8]} />
      <OutputCell clue={clues[9]} />
      <OutputCell clue={clues[10]} />
    </div>
  );
}

export default Outputs;
