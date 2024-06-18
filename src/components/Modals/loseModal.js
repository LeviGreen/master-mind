import React, { useContext } from 'react';
import Modal from 'react-modal';
import { customStyles } from "./constants";
import ModalButtons from "./modalButtons";
import InputRow from "../Inputs/inputRow";
import MasterMindContext from '../MasterMindContext';

function LoseModal( { showLose, resetGame, answer } ) {
  const { daily } = useContext(MasterMindContext);

  return (
      <Modal
        isOpen={showLose}
        contentLabel="You lost!"
        style={customStyles}
      >
        <h2>You Lost! 💩</h2>
        <InputRow rowValue={answer}/>
        <p>Try again{daily ? ' tomorrow.' : '.'}</p>
        <ModalButtons onClick={(mode) => resetGame(mode)}/>
      </Modal>
  );
}

export default LoseModal;
