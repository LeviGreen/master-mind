import Modal from 'react-modal';
import { customStyles } from "./constants";
import ModalButtons from "./modalButtons";

function RulesModal( { showRules, resetGame } ) {
  return (
      <Modal
        isOpen={showRules}
        contentLabel="Game Rules"
        style={customStyles}
      >
        <h2>How to Play Master Mind</h2>
        <h3>Objective</h3>
        <p>Guess the correct color code in 10 turns or less.</p>
        <h3>Rules</h3>
        <p>The code is a 4-color sequence.</p>
        <p>The colors can be in any order.</p>
        <h3>Scoring</h3>
        <p>Black peg: Correct color but wrong position.</p>
        <p>White peg: Correct color and position.</p>
        <h3>Modes</h3>
        <p>Medium - 6 available colors, with no duplicates</p>
        <p>Hard - 6 available colors, and duplicates are allowed</p>
        <ModalButtons onClick={(mode) => resetGame(mode)}/>
      </Modal>
  );
}

export default RulesModal;
