import { useState } from "react";
import { kebabCaseToTitleCase } from "./helpers";
import "./App.css";

function App() {
  const [disabled, setDisabled] = useState(false);
  const [buttonColor, setButtonColor] = useState("medium-violet-red");
  const nextColorClass =
    buttonColor === "medium-violet-red" ? "midnight-blue" : "medium-violet-red";
  const nextColorTitleCase = kebabCaseToTitleCase(nextColorClass);
  const className = disabled ? "gray" : buttonColor;

  const divStyle = {
    display: "grid",
    placeItems: "center",
    width: "50vw",
    backgroundColor:
      buttonColor === "medium-violet-red" ? "lightpink" : "skyblue",
  };

  return (
    <div style={divStyle}>
      <button
        className={className}
        disabled={disabled}
        onClick={() => setButtonColor(nextColorClass)}
      >
        Change to {nextColorTitleCase}
      </button>
      <br /> <br />
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
