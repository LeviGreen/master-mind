import "./index.css";
import InputRow from "./inputRow";

function Inputs({ rowPosition, columnPosition, color, handleColorSelection}) {
  return (
    <div className="inputs">
      <InputRow/>
      <InputRow/>
      <InputRow/>
      <InputRow/>
      <InputRow/>
      <InputRow/>
      <InputRow/>
      <InputRow/>
      <InputRow/>
      <InputRow/>
      <InputRow/>
    </div>
  );
}

export default Inputs;
