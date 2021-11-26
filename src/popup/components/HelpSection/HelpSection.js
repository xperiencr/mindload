import React from 'react';
import CloseIcon from './images/close.svg';
import './HelpSection.css';
import KeyboardShortcut from './KeyboardShortcut';

export default function HelpSection({ onClose }) {
  return (
    <div className="HelpSection">
      <img
        className="HelpSection__close-button"
        src={CloseIcon}
        alt="Close"
        title="Close"
        onClick={onClose}
      />
      <div className="HelpSection__header">
        <span className="HelpSection__title">Keyboard shorcuts</span>
      </div>
      <div className="HelpSection__content">
        <KeyboardShortcut keys={['Ctrl', '[comma]']} description="Open dialog" />
        <KeyboardShortcut keys={['Ctrl', 'E']} description="Toggle queue" />
        <KeyboardShortcut keys={['Ctrl', 'Alt', 'A']} description="Go to archive" />
        <KeyboardShortcut keys={['Alt', 'Shift', 'D']} description="Dismiss first note from queue" />
        <KeyboardShortcut keys={['Alt', 'Shift', 'A']} description="Send first note to archive" />
        <KeyboardShortcut keys={['Alt', 'Shift', 'G']} description="Send first note to bottom" />
      </div>
    </div>
  );
}
