import React, { useContext } from 'react';
import { KEY_COLORS, EASY, MEDIUM, HARD } from "../../constants";
import KeyboardButton from '../ColorKeyboard/keyboardButton';
import { easyAnswer, mediumAnswer, hardAnswer } from "../../helpers"
import "./index.css";
import MasterMindContext from '../MasterMindContext';

function ModalButtons( { onClick } ) {
  const { setMode } = useContext(MasterMindContext);

  const onModeClick = (mode, answer) => {
    setMode(mode);
    onClick(answer)
  }

  return (
    <div className="modal-buttons-container">
      <KeyboardButton color={KEY_COLORS[3]} text={EASY} onClick={() => onModeClick(EASY, easyAnswer())} />
      <KeyboardButton color={KEY_COLORS[2]} text={MEDIUM} onClick={() => onModeClick(MEDIUM, mediumAnswer())} />
      <KeyboardButton color={KEY_COLORS[0]} text={HARD} onClick={() => onModeClick(HARD, hardAnswer())} />
    </div>
  );
}

export default ModalButtons;
