import "./index.css";

function InputRow({ rowPosition, columnPosition, color, handleColorSelection}) {
  return (
    <div className="input-row">
      <div className="input-cell"/>
      <div className="input-cell"/>
      <div className="input-cell"/>
      <div className="input-cell"/>
    </div>
  );
}

export default InputRow;
