import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import CloseIcon from './icons/close.svg';
import DoneIcon from './icons/done.svg';
import CloseIconUrgent from './icons/closeUrgent.svg';
import DoneIconUrgent from './icons/doneUrgent.svg';

import './QueueNote.css';

function QueueNote({ onSave, onDiscard, content, urgent }) {
  const [isMouseOver, changeState] = useState(false);

  return (
    <div
      className={urgent ? "QueueNoteUrgent" : "QueueNote"}
      onMouseOver={() => changeState(true)}
      onMouseLeave={() => changeState(false)}
    >
      {<p className="QueueNote__content">{content}</p>}
      {isMouseOver ? (
        <div>
          <button className={urgent ? "QueueNote__done--urgent" : "QueueNote__done"} onClick={onSave}>
            <img src={urgent? DoneIconUrgent : DoneIcon} alt="Done"></img>
          </button>
          <button className={urgent ? "QueueNote__close--urgent" : "QueueNote__close"} onClick={onDiscard}>
            <img src={urgent ? CloseIconUrgent : CloseIcon} alt="Close"></img>
          </button>
        </div>
      ) : (
        null
      )}
    </div>
  );
}

QueueNote.propTypes = {
  onSave: PropTypes.func.isRequired,
  onDiscard: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  urgent: PropTypes.bool.isRequired,
};

export default QueueNote;
