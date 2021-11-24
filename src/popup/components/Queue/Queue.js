import React from 'react';
import PropTypes from 'prop-types';

import expandLess from './icons/expandLess.svg';

import './Queue.css';
import QueueNote from '../QueueNote';

function Queue({
  notes,
  onAdd,
  onRemove,
  onClose,
  hideQueue,
}) {
  const noteList = notes.map(({ id, content, isUrgent }) => (
    <QueueNote
      content={content}
      isUrgent={isUrgent}
      onSave={() => onAdd({ id, content, isUrgent })}
      onDiscard={() => onRemove(id)}
    />
  ));

  const emptyQueueLegend = (
    <span className="Queue__empty-list-legend">
      Your queue is empty.
      <br />
      <a onClick={hideQueue} href="#!" className="Queue__go-add-note">Add a note.</a>
    </span>
  );

  return (
    <div className="Queue">
      <div className="Queue__close">
        <button type="button" className="Queue__expandLess" onClick={onClose}>
          <img src={expandLess} alt="expandLess" />
        </button>
      </div>
      <div className="Queue__list">{noteList.length ? noteList : emptyQueueLegend}</div>
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
  hideQueue: PropTypes.func.isRequired,
};

export default Queue;
