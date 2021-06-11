import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import expandLess from './icons/expandLess.svg';

import './Queue.css';
import QueueNote from '../QueueNote';

function Queue({ notes, onAdd, onRemove, onClose }) {
  const noteList = notes.map(({ id, content, isUrgent }) => (
    <QueueNote
      content={content}
      urgent={isUrgent}
      onSave={() => onAdd({ id, content, isUrgent })}
      onDiscard={() => onRemove(id)}
    />
  ));

  return (
    <div className="Queue">
      <div className="Queue__close">
        <button type="button" className="Queue__expandLess" onClick={onClose}>
          <img src={expandLess} alt="expandLess" />
        </button>
      </div>
      <div className="Queue__list">{noteList}</div>
    </div>
  );
}

Queue.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      isUrgent: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Queue;
