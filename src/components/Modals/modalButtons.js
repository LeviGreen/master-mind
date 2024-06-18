import React, { useContext } from 'react';
import { KEY_COLORS, EASY, MEDIUM, HARD } from "../../constants";
import KeyboardButton from '../ColorKeyboard/keyboardButton';
import { easyAnswer, mediumAnswer, hardAnswer, dailyAnswer } from "../../helpers"
import "./index.css";
import MasterMindContext from '../MasterMindContext';

function ModalButtons( { onClick } ) {
  const { setMode, setDaily } = useContext(MasterMindContext);

  const onModeClick = (daily, mode, answer) => {
    setDaily(daily);
    setMode(mode);
    onClick(answer)
  }

  return (
    <>
      <h4>Random</h4>
      <div className="modal-buttons-container">
        <KeyboardButton color={KEY_COLORS[3]} text={EASY} onClick={() => onModeClick(false, EASY, easyAnswer())} />
        <KeyboardButton color={KEY_COLORS[2]} text={MEDIUM} onClick={() => onModeClick(false, MEDIUM, mediumAnswer())} />
        <KeyboardButton color={KEY_COLORS[0]} text={HARD} onClick={() => onModeClick(false, HARD, hardAnswer())} />
      </div>
      <h4>Daily</h4>
      <div className="modal-buttons-container">
        <KeyboardButton color={KEY_COLORS[3]} text={EASY} onClick={() => onModeClick(true, EASY, dailyAnswer(EASY))} />
        <KeyboardButton color={KEY_COLORS[2]} text={MEDIUM} onClick={() => onModeClick(true, MEDIUM, dailyAnswer(MEDIUM))} />
        <KeyboardButton color={KEY_COLORS[0]} text={HARD} onClick={() => onModeClick(true, HARD, dailyAnswer(HARD))} />
      </div>
    </>
  );
}

export default ModalButtons;
