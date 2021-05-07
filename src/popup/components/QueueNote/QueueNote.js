import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import CloseIcon from './icons/close.svg';
import DoneIcon from './icons/done.svg';
import CloseIconUrgent from './icons/closeUrgent.svg';
import DoneIconUrgent from './icons/doneUrgent.svg';

import './QueueNote.css';

function QueueNote({ onSave, onDiscard, content, isUrgent }) {
  const [isMouseOver, changeState] = useState(false);

  return (
    <div
      className={isUrgent ? 'QueueNoteUrgent' : 'QueueNote'}
      onMouseOver={() => changeState(true)}
      onMouseLeave={() => changeState(false)}
    >
      {<p className="QueueNote__content">{content}</p>}
      {isMouseOver ? (
        <div>
          <button
            className={isUrgent ? 'QueueNote__done--urgent' : 'QueueNote__done'}
            onClick={onSave}
          >
            <img
              className={isUrgent ? 'QueueNote__done--urgent--icon' : 'QueueNote__done--icon'}
              src={isUrgent ? DoneIconUrgent : DoneIcon}
              alt="Done"
            ></img>
          </button>
          <button
            className={isUrgent ? 'QueueNote__close--urgent' : 'QueueNote__close'}
            onClick={onDiscard}
          >
            <img
              className={isUrgent ? 'QueueNote__close--urgent--icon' : 'QueueNote__close--icon'}
              src={isUrgent ? CloseIconUrgent : CloseIcon}
              alt="Close"
            ></img>
          </button>
        </div>
      ) : null}
    </div>
  );
}

QueueNote.propTypes = {
  onSave: PropTypes.func.isRequired,
  onDiscard: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  isUrgent: PropTypes.bool.isRequired,
};

export default QueueNote;
