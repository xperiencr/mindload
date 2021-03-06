import React, { useState } from 'react';
import './Note.css';
import PropTypes from 'prop-types';
import closeIcon from './close.svg';
import closeIconRed from './close--red.svg';

function Note({ id, content, isUrgent, onRemove }) {
  const [isHidden, setHidden] = useState(true);

  const botonDeCerrar = (
    <button
      type="button"
      className={`Note__close ${isUrgent ? 'Note__close--is-urgent' : ''}`}
      onClick={() => onRemove(id)}
    >
      <img src={isUrgent ? closeIconRed : closeIcon} alt="Close" />
    </button>
  );

  return (
    <div
      className={`Note ${isUrgent ? 'Note--urgent' : ''}`}
      onMouseEnter={() => setHidden(false)}
      onMouseLeave={() => setHidden(true)}
    >
      <p>{content}</p>
      {!isHidden && botonDeCerrar}
    </div>
  );
}

Note.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isUrgent: PropTypes.bool.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Note;
