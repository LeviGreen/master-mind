import "./index.css";

function InputRow({ row }) {
  return (
    <div className="input-row">
      <div className="input-cell" style={{ backgroundColor: row[0] }}/>
      <div className="input-cell" style={{ backgroundColor: row[1] }}/>
      <div className="input-cell" style={{ backgroundColor: row[2] }}/>
      <div className="input-cell" style={{ backgroundColor: row[3] }}/>
    </div>
  );
}

export default InputRow;
