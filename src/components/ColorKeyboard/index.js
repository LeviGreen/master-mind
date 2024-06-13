import "./index.css";
import KeyboardButton from "./keyboardButton";

function ColorKeyboard() {
  return (
    <div className="keyboard">
      <div className="keyboard-row">
        <KeyboardButton color="#d3d6da" text="Enter" onClick={() => console.log("here")}/>
        <KeyboardButton color="#fc716b" text="a" onClick={() => console.log("here")}/>
        <KeyboardButton color="#fb9b00" text="s" onClick={() => console.log("here")}/>
        <KeyboardButton color="#f7da21" text="d" onClick={() => console.log("here")}/>
        <KeyboardButton color="#b5e352" text="f" onClick={() => console.log("here")}/>
        <KeyboardButton color="#4d88f9" text="g" onClick={() => console.log("here")}/>
        <KeyboardButton color="#b4a8ff" text="h" onClick={() => console.log("here")}/>
        <KeyboardButton color="#d3d6da" text="Back" onClick={() => console.log("here")}/>
      </div>
      <div className="keyboard-row">
      </div>
    </div>
  );
}

export default ColorKeyboard;
