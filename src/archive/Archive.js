import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-responsive-masonry';

import { Note } from '@/popup/components';
import './archive.css';

function Archive({ notes, removeNote }) {
  return (
    <div className="Archive">
      <Masonry columnsCount={3} gutter="1rem">
        {notes
          .filter((note) => note.isUrgent)
          .map((urgentNote) => (
            <Note onRemove={removeNote} key={urgentNote.id} content={urgentNote.content} isUrgent />
          ))}
        {notes
          .filter((note) => !note.isUrgent)
          .map((note) => (
            <Note onRemove={removeNote} key={note.id} content={note.content} isUrgent={false} />
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
