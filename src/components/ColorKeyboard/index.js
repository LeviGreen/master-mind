import React, { useEffect } from 'react';
import "./index.css";
import KeyboardButton from "./keyboardButton";
import { KEY_COLORS, KEY_TEXT, EASY } from "../../constants";
import MasterMindContext from '../MasterMindContext';

function ColorKeyboard({ onColorClick, onSubmit, onDelete, disableSubmit, disableDelete }) {
  const { mode } = React.useContext(MasterMindContext);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch(event.key) {
        case KEY_TEXT[0]:
          onColorClick(KEY_COLORS[0]);
          break;
        case KEY_TEXT[1]:
          onColorClick(KEY_COLORS[1]);
          break;
        case KEY_TEXT[2]:
          onColorClick(KEY_COLORS[2]);
          break;
        case KEY_TEXT[3]:
          onColorClick(KEY_COLORS[3]);
          break;
        case KEY_TEXT[4]:
          onColorClick(KEY_COLORS[4]);
          break;
        case KEY_TEXT[5]:
          onColorClick(KEY_COLORS[5]);
          break;
        case 'Enter':
          onSubmit();
          break;
        case 'Backspace':
          onDelete();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onColorClick, onSubmit, onDelete]);

  return (
    <div className="keyboard">
      <div className="keyboard-row">
        <KeyboardButton color={KEY_COLORS[0]} text={KEY_TEXT[0]} onClick={() => onColorClick(KEY_COLORS[0])}/>
        { mode != EASY ? <KeyboardButton color={KEY_COLORS[1]} text={KEY_TEXT[1]} onClick={() => onColorClick(KEY_COLORS[1])}/> : null }
        <KeyboardButton color={KEY_COLORS[2]} text={KEY_TEXT[2]} onClick={() => onColorClick(KEY_COLORS[2])}/>
      </div>
      <div className="keyboard-row">
        <KeyboardButton color={KEY_COLORS[3]} text={KEY_TEXT[3]} onClick={() => onColorClick(KEY_COLORS[3])}/>
        <KeyboardButton color={KEY_COLORS[4]} text={KEY_TEXT[4]} onClick={() => onColorClick(KEY_COLORS[4])}/>
        { mode != EASY ? <KeyboardButton color={KEY_COLORS[5]} text={KEY_TEXT[5]} onClick={() => onColorClick(KEY_COLORS[5])}/> : null }
      </div>
      <div className="keyboard-row">
        <KeyboardButton color="#d3d6da" text="DEL" onClick={() => onDelete()} disabled={disableDelete}/>
        <KeyboardButton color="#d3d6da" text="ENT" onClick={() => onSubmit()} disabled={disableSubmit}/>
      </div>
    </div>
  );
}

export default ColorKeyboard;
