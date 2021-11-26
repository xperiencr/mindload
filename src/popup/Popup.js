import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Hotkeys from 'react-hot-keys';
import { nanoid } from 'nanoid';

import { Main, Navigation, HelpSection, Queue } from './components';

import './index.css';

export default function Popup({
  createNote,
  deleteNote,
  createArchiveNote,
  openArchive,
  queueNotes,
}) {
  const shortcutsHandlers = {
    'ctrl+e': () => {
      setIsQueue(!isQueue);
    },
    'shift+alt+d': () => {
      const firstUrgent = queueNotes.filter((note) => note.isUrgent)[0];
      const firstNote = queueNotes[0];
      const noteToDelete = firstUrgent ?? firstNote;
      if (!noteToDelete) {
        return;
      }
      const idToDelete = noteToDelete.id;
      deleteNote(idToDelete);
    },
    'shift+alt+g': () => {
      const firstUrgent = queueNotes.filter((note) => note.isUrgent)[0];
      const firstNote = queueNotes[0];
      const noteToDelete = firstUrgent ?? firstNote;
      if (!noteToDelete || queueNotes.length <= 1) {
        return;
      }
      const idToDelete = noteToDelete.id;
      createNote({ ...noteToDelete, id: nanoid(), isUrgent: false }).then(() => {
        deleteNote(idToDelete);
      });
    },
    'shift+alt+a': () => {
      const firstUrgent = queueNotes.filter((note) => note.isUrgent)[0];
      const firstNote = queueNotes[0];
      const firstQueueNote = firstUrgent ?? firstNote;
      if (!firstQueueNote) {
        return;
      }
      createArchiveNote(firstQueueNote);
      deleteNote(firstQueueNote.id);
    },
  };

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
      keyName="ctrl+e,shift+alt+d,shift+alt+g,shift+alt+a"
      onKeyDown={(key) => {
        shortcutsHandlers[key]();
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
  createArchiveNoteBottom: PropTypes.func.isRequired,
};
