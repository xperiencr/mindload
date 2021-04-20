import React from 'react';
import ReactDOM from 'react-dom';

import HelpSection from './components/HelpSection';

import './index.css';

function Popup() {
  return (
    <div className="Popup">
      <HelpSection onClick />
    </div>
  );
}

ReactDOM.render(<Popup />, document.getElementById('root'));
