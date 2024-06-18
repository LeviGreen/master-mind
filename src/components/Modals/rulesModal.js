import Modal from 'react-modal';
import { customStyles, primaryBadge } from "./constants";
import ModalButtons from "./modalButtons";
import './index.css';

function RulesModal( { showRules, resetGame } ) {
  return (
      <Modal
        isOpen={showRules}
        contentLabel="Game Rules"
        style={customStyles}
      >
        <div className='modal-container'>
          <h2>How to Play Master Mind</h2>
          <h3>Objective</h3>
          <p>Guess the correct color code in 10 turns or less.</p>
          <h3>Rules</h3>
          <p>
            The code is a 4-color sequence.<br/>
            The colors can be in any order.<br/>
            The scoring pegs are in no particular order.
          </p>
          <h3>
            Scoring
            <span style={primaryBadge}>Updated!</span>
          </h3>
          <p>
            White peg: Correct color but wrong position.<br/>
            Black peg: Correct color and position.
          </p>
          <h3>
            Modes
            <span style={primaryBadge}>Updated!</span>
          </h3>
          <p>
            Easy - 4 available colors, with no duplicates<br/>
            Medium - 6 available colors, with no duplicates<br/>
            Hard - 6 available colors, and duplicates are allowed
          </p>
          <ModalButtons onClick={(mode) => resetGame(mode)}/>
        </div>
      </Modal>
  );
}

export default RulesModal;
