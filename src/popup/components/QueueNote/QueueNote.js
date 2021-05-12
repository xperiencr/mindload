import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import CloseIcon from './icons/close.svg';
import SaveIcon from './icons/save.svg';
import CloseIconUrgent from './icons/closeUrgent.svg';
import SaveIconUrgent from './icons/saveUrgent.svg';

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
            className={isUrgent ? 'QueueNote__save--urgent' : 'QueueNote__save'}
            onClick={onSave}
          >
            <img
              className={isUrgent ? 'QueueNote__save-icon--urgent' : 'QueueNote__save-icon'}
              src={isUrgent ? SaveIconUrgent : SaveIcon}
              alt="Done"
            ></img>
          </button>
          <button
            className={isUrgent ? 'QueueNote__close--urgent' : 'QueueNote__close'}
            onClick={onDiscard}
          >
            <img
              className={isUrgent ? 'QueueNote__close-icon--urgent' : 'QueueNote__close-icon'}
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
