import { KEY_COLORS } from "../../constants";
import KeyboardButton from '../ColorKeyboard/keyboardButton';
import { easyAnswer, mediumAnswer, hardAnswer } from "../../helpers"
import "./index.css";

function ModalButtons( { onClick } ) {
  return (
    <div className="modal-buttons-container">
      <KeyboardButton color={KEY_COLORS[3]} text="Easy" onClick={() => onClick(easyAnswer())} />
      <KeyboardButton color={KEY_COLORS[2]} text="Medium" onClick={() => onClick(mediumAnswer())} />
      <KeyboardButton color={KEY_COLORS[0]} text="Hard" onClick={() => onClick(hardAnswer())} />
    </div>
  );
}

export default ModalButtons;
