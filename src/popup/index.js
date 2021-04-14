import React, { useState } from "react";
import ReactDOM from "react-dom";

import Toast from "./components/Toast";

import "./index.css";

function Popup() {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className="Popup">
      <button type="button" onClick={() => setIsSuccess(!isSuccess)}>Toggle</button>
      <Toast isSuccess={isSuccess} />
    </div>
  );
}

ReactDOM.render(<Popup />, document.getElementById("root"));
