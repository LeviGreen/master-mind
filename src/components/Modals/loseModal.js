import Modal from 'react-modal';
import { customStyles } from "./constants";
import ModalButtons from "./modalButtons";
import InputRow from "../Inputs/inputRow";

function LoseModal( { showLose, resetGame, answer, dailyGame=false } ) {
  return (
      <Modal
        isOpen={showLose}
        contentLabel="You lost!"
        style={customStyles}
      >
        <h2>You Lost! 💩</h2>
        <InputRow rowValue={answer}/>
        <p>Try again{dailyGame ? ' tomorrow.' : null}</p>
        <ModalButtons onClick={(mode) => resetGame(mode)}/>
      </Modal>
  );
}

export default LoseModal;
