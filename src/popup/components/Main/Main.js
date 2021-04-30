import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Main.css';

import sendIcon from './assets/send.svg';

function Main({ onCreateNote }) {
  const [noteContent, setNoteContent] = useState('');

  return (
    <div className="Main">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onCreateNote({ content: noteContent });
        }}
        className="Main__form"
      >
        <input
          className="Main__input"
          type="text"
          placeholder="Write it down"
          onChange={(event) => setNoteContent(event.target.value)}
          value={noteContent}
        />
        <button className="Main__submit" type="submit">
          <img className="Main__submit-icon" src={sendIcon} alt="Send" />
        </button>
      </form>
    </div>
  );
}

Main.propTypes = {
  onCreateNote: PropTypes.func.isRequired,
};

export default Main;
