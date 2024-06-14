import Modal from 'react-modal';
import { customStyles } from "./constants";
import { GRAY } from "../../constants";
import KeyboardButton from '../ColorKeyboard/keyboardButton';
import InputRow from "../Inputs/inputRow";

function LoseModal( { showLose, resetGame, answer, dailyGame=false } ) {
  return (
      <Modal
        isOpen={showLose}
        contentLabel="You lost!"
        style={customStyles}
      >
        <h2>You Lost! 💩</h2>
        <InputRow row={answer}/>
        <p>Try again{dailyGame ? ' tomorrow.' : null}</p>
        <KeyboardButton color={GRAY} text="Play Random Game" onClick={() => resetGame()} />
      </Modal>
  );
}

export default LoseModal;
