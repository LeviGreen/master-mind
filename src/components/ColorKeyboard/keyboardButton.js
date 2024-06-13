import "./index.css";
import React from "react";

function KeyboardButton({ onClick, color, text, disabled }) {
    return (
        <button
            className={"keyboard-button"}
            onClick={onClick}
            style={{ backgroundColor: color }}
            disabled={disabled}
        >
            {text}
        </button>
    );
}

export default KeyboardButton;