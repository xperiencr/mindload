import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-responsive-masonry';

import { Note } from '@/popup/components';
import './Archive.css';

function Archive({ notes, removeNote }) {
  const emptyMessage = (
    <div className="Archive__empty-list-legend">Nothing around here...</div>
  );
  return (
    <div className="Archive">
      <h1 className="Archive__title">Saved notes</h1>
      {!notes?.length && emptyMessage}
      <Masonry columnsCount={3} gutter="1rem">
        {notes
          .filter((note) => note.isUrgent)
          .map((urgentNote) => (
            <Note
              id={urgentNote.id}
              onRemove={removeNote}
              key={urgentNote.id}
              content={urgentNote.content}
              isUrgent
            />
          ))}
        {notes
          .filter((note) => !note.isUrgent)
          .map((note) => (
            <Note
              id={note.id}
              onRemove={removeNote}
              key={note.id}
              content={note.content}
              isUrgent={false}
            />
          ))}
      </Masonry>
    </div>
  );
}

Archive.propTypes = {
  notes: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isUrgent: PropTypes.bool.isRequired,
  }).isRequired,
  removeNote: PropTypes.func.isRequired,
};

export default Archive;
