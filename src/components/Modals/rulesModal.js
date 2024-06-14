import Modal from 'react-modal';
import { customStyles } from "./constants";
import { GRAY } from "../../constants";
import KeyboardButton from '../ColorKeyboard/keyboardButton';

function RulesModal( { showRules, setShowRules } ) {
  return (
      <Modal
        isOpen={showRules}
        onRequestClose={() => setShowRules(false)}
        contentLabel="Game Rules"
        style={customStyles}
      >
        <h2>How to Play Master Mind</h2>
        <h3>Objective</h3>
        <p>Guess the correct color code in 10 turns or less.</p>
        <h3>Rules</h3>
        <p>1. The code is a 4-color sequence.</p>
        <p>2. The colors can be in any order.</p>
        <p>3. The colors can be any of the 6 available colors.</p>
        <p>4. Duplicate colors are allowed.</p>
        <h3>Scoring</h3>
        <p>Black peg: Correct color but wrong position.</p>
        <p>White peg: Correct color and position.</p>
        <KeyboardButton color={GRAY} text="Start Game" onClick={() => setShowRules(false)} />
      </Modal>
  );
}

export default RulesModal;
