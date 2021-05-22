import React from 'react';
import CloseIcon from './images/close.svg';
import './HelpSection.css';
import './KeyboardShortcut.css';
import KeyboardShortcut from './KeyboardShortcut';

export default function HelpSection({ onClose }) {
  return (
    <div className="HelpSection">
      <img className="HelpSection__close" src={CloseIcon} alt="X" onClick={onClose} />
      <span className="KeyboardShortCut">Keyboard shorcuts</span>
      <KeyboardShortcut keys={['Ctrl', '.']} description="Open input dialog" />
      <KeyboardShortcut keys={['Ctrl', 'E']} description="Show queue" />
      <KeyboardShortcut keys={['Ctrl', 'H']} description="Hide queue" />
      <KeyboardShortcut keys={['Ctrl', 'Alt', 'A']} description="Go to archive" />
    </div>
  );
}
