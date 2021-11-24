
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import './Main.css';

import sendIcon from './assets/send.svg';

function Main({ onCreateNote }) {
  const [noteContent, setNoteContent] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <div className="Main">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onCreateNote({
            id: nanoid(),
            content: noteContent,
            isUrgent: noteContent.includes('#urgent'),
          });
          setNoteContent('');
        }}
        className="Main__form"
      >
        <input
          className="Main__input"
          type="text"
          placeholder="Write it down"
          onChange={(event) => setNoteContent(event.target.value)}
          value={noteContent}
          ref={inputRef}
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
