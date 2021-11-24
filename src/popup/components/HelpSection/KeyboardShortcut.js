import React from 'react';
import './KeyboardShortcut.css';

export default function KeyboardShortcut({ keys, description }) {
  const keysElements = keys.map((key) => <span className="KeyboardShortCut__key">{key}</span>);

  return (
    <div className="KeyboardShortCut">
      {keysElements}
      <span className="KeyboardShortCut__title">{description}</span>
    </div>
  );
}
