import Modal from 'react-modal';
import { customStyles } from "./constants";
import { GRAY } from "../../constants";
import KeyboardButton from '../ColorKeyboard/keyboardButton';
import InputRow from "../Inputs/inputRow";

function WinModal( { showWin, resetGame, answer, rowCount } ) {
  return (
      <Modal
        isOpen={showWin}
        contentLabel="You won!"
        style={customStyles}
      >
        <h2>You Won!</h2>
        <InputRow row={answer}/>
        <p>You solved it in {rowCount} tries.</p>
        <KeyboardButton color={GRAY} text="Play Again" onClick={() => resetGame()} />
      </Modal>
  );
}

export default WinModal;
