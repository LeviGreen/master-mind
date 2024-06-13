import "./index.css";
import KeyboardButton from "./keyboardButton";
import { KEY_COLORS } from "../../constants";


function ColorKeyboard({ onColorClick, onSubmit, onDelete }) {
  return (
    <div className="keyboard">
      <div className="keyboard-row">
        <KeyboardButton color="#d3d6da" text="Enter" onClick={() => onSubmit()}/>
        <KeyboardButton color={KEY_COLORS[0]} text="a" onClick={() => onColorClick(KEY_COLORS[0])}/>
        <KeyboardButton color={KEY_COLORS[1]} text="s" onClick={() => onColorClick(KEY_COLORS[1])}/>
        <KeyboardButton color={KEY_COLORS[2]} text="d" onClick={() => onColorClick(KEY_COLORS[2])}/>
        <KeyboardButton color={KEY_COLORS[3]} text="f" onClick={() => onColorClick(KEY_COLORS[3])}/>
        <KeyboardButton color={KEY_COLORS[4]} text="g" onClick={() => onColorClick(KEY_COLORS[4])}/>
        <KeyboardButton color={KEY_COLORS[5]} text="h" onClick={() => onColorClick(KEY_COLORS[5])}/>
        <KeyboardButton color="#d3d6da" text="Back" onClick={() => onDelete()}/>
      </div>
      <div className="keyboard-row">
      </div>
    </div>
  );
}

export default ColorKeyboard;
