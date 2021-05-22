import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

import { Storage } from 'services';

const Context = createContext(null);

function Provider({ children }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    Storage.getQueueNotes().then(setNotes);
    Storage.addListener((changes) => {
      if ('queueNotes' in changes) setNotes(changes.queueNotes.newValue);
    });
  }, []);

  const state = {
    notes,
  };
  const actions = {
    addNote: Storage.saveQueueNote,
    removeNote: Storage.deleteQueueNote,
  };
  return <Context.Provider value={[state, actions]}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node,
};

Provider.defaultProps = {
  children: null,
};

export default { Context, Provider };
