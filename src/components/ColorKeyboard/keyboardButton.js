import "./index.css";
import React from "react";

function KeyboardButton({ onClick, color, text }) {
    return (
        <button
            className={"keyboard-button"}
            onClick={onClick}
            style={{ backgroundColor: color }}
        >
            {text}
        </button>
    );
}

export default KeyboardButton;