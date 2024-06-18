import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { customStyles, confettiConfig, primaryBadge } from "./constants";
import { hexToEmoji, GRAY, URI } from "../../constants";
import { todayDate }  from "../../helpers";
import ModalButtons from "./modalButtons";
import InputRow from "../Inputs/inputRow";
import Confetti from 'react-dom-confetti';
import MasterMindContext from '../MasterMindContext';

function WinModal( { showWin, resetGame, answer, clues } ) {
  const { row, mode, daily } = useContext(MasterMindContext);
  const [showToast, setShowToast] = useState(false);

  function scoreCopy() {
    let text = `${daily ? "Daily" : "Random"} MasterMind\n`
    text = text + `${daily ? `(${todayDate()})\n` : ''}`;
    text = text + `${mode} - ${row}/10\n`;
    if (daily) {
      clues.forEach((clue, index) => {
        if (clue.length === 4 && clue.every((value) => value === GRAY)) {
          return;
        }

        clue.forEach((color) => {
          text = text + hexToEmoji[color];
        })
        text = text + "\n";
      })
    } else {
      text = text + answer.map((color) => hexToEmoji[color]).join("") + "\n";
    }
    text = text + URI;
    return text;
  }

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(scoreCopy());
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

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
          <a href="#" onClick={handleCopyClick}>Share Score</a> {showToast && <span style={primaryBadge}>Copied!</span>}
          <ModalButtons onClick={(mode) => resetGame(mode)}/>
        </Modal>
      </div>
    </>
  );
}

export default WinModal;
