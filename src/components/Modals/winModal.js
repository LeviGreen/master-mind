import React, { useContext } from 'react';
import Modal from 'react-modal';
import { customStyles, confettiConfig } from "./constants";
import ModalButtons from "./modalButtons";
import InputRow from "../Inputs/inputRow";
import Confetti from 'react-dom-confetti';
import MasterMindContext from '../MasterMindContext';

function WinModal( { showWin, resetGame, answer } ) {
  const { row } = useContext(MasterMindContext);

  return (
    <>
      <div style={{position: 'relative', zIndex: 1000}}>
        <Confetti active={ showWin } config={ confettiConfig }/>
      </div>
      <div style={{position: 'relative', zIndex: 999}}>
        <Modal
          isOpen={showWin}
          contentLabel="You won!"
          style={customStyles}
        >
          <h2>You Won!</h2>
          <InputRow rowValue={answer}/>
          <p>You solved it in {row} tries.</p>
          <ModalButtons onClick={(mode) => resetGame(mode)}/>
        </Modal>
      </div>
    </>
  );
}

export default WinModal;
