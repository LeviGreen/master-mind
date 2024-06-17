import React, { useContext } from 'react';
import { KEY_COLORS } from "../../constants";
import KeyboardButton from '../ColorKeyboard/keyboardButton';
import { easyAnswer, mediumAnswer, hardAnswer } from "../../helpers"
import "./index.css";
import MasterMindContext from '../MasterMindContext';

function ModalButtons( { onClick } ) {
  const { setEasyMode } = useContext(MasterMindContext);

  const onModeClick = (easyMode, answer) => {
    setEasyMode(easyMode);
    onClick(answer)
  }

  return (
    <div className="modal-buttons-container">
      <KeyboardButton color={KEY_COLORS[3]} text="Easy" onClick={() => onModeClick(true, easyAnswer())} />
      <KeyboardButton color={KEY_COLORS[2]} text="Medium" onClick={() => onModeClick(false, mediumAnswer())} />
      <KeyboardButton color={KEY_COLORS[0]} text="Hard" onClick={() => onModeClick(false, hardAnswer())} />
    </div>
  );
}

export default ModalButtons;
