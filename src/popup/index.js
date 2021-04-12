import React from "react";
import ReactDOM from "react-dom";

import Note from "./components/Note";

import "./index.css";

function Popup() {
  return (
    <div className="Popup">
      <Note content="Esto es una nota" isUrgent={false} onRemove={alert} />
    </div>
  );
}

ReactDOM.render(<Popup />, document.getElementById("root"));
