import React from 'react';
import PropTypes from 'prop-types';

import './QueueNote.css';

function QueueNote({ onSave, onDiscard, content }) {
  return <div className="QueueNote">{content}</div>;
}

QueueNote.propTypes = {
  onSave: PropTypes.func.isRequired,
  onDiscard: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
};

export default QueueNote;
