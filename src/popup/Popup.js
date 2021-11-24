import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Hotkeys from 'react-hot-keys';

import { Main, Navigation, HelpSection, Queue } from './components';

import './index.css';

export default function Popup({
  createNote,
  deleteNote,
  createArchiveNote,
  openArchive,
  queueNotes,
}) {
  const [isHelpSection, setIsHelpSection] = useState(false);
  const [isQueue, setIsQueue] = useState(true);

  const baseContent = (
    <>
      <Main onCreateNote={createNote} />
      <Navigation
        goHome={openArchive}
        openHelp={() => setIsHelpSection(true)}
        openQueue={() => setIsQueue(true)}
      />
    </>
  );
  const queueContent = (
    <Queue
      onRemove={deleteNote}
      onAdd={(note) => {
        deleteNote(note.id);
        createArchiveNote(note);
      }}
      onClose={() => setIsQueue(false)}
      notes={queueNotes}
      hideQueue={() => setIsQueue(false)}
    />
  );
  let content = null;
  if (isHelpSection) content = <HelpSection onClose={() => setIsHelpSection(false)} />;
  else if (isQueue) content = queueContent;
  else content = baseContent;

  return (
    <Hotkeys
      keyName="ctrl+e,shift+alt+d"
      onKeyDown={(key) => {
        if (key === 'ctrl+e') setIsQueue(!isQueue);
        if (key === 'shift+alt+d' && isQueue) {
          deleteNote(queueNotes[0].id);
        }
      }}
    >
      <div className="Popup">{content}</div>
    </Hotkeys>
  );
}

Popup.propTypes = {
  createNote: PropTypes.func.isRequired,
  openArchive: PropTypes.func.isRequired,
  queueNotes: PropTypes.array.isRequired,
  deleteNote: PropTypes.func.isRequired,
  createArchiveNote: PropTypes.func.isRequired,
};
