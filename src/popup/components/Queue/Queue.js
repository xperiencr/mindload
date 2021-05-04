import React from 'react';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import PropTypes from 'prop-types';

import expandLess from './icons/expandLess.svg';

import './Queue.css';
import QueueNote from '../QueueNote';

function Queue({ notes, onAdd, onRemove, onClose }) {
  
  const noteL = notes.map((note) => (
    <QueueNote
      content={note.content}
      urgent={note.isUrgent}
      onSave={onAdd}
      onDiscard={onRemove}
    ></QueueNote>
  ));

  return (
    <div className="Queue">
      <button className="Queue__expanLess" onClick={onClose}>
        <img src={expandLess} alt="expandLess"></img>
      </button>
      <div className="Queue__list">{noteL}</div>
    </div>
  );
}

Queue.propTypes = {
  notes: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Queue;
