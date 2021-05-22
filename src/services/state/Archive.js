import React, { useEffect, useState, createContext } from 'react';
import PropTypes from 'prop-types';

import { Storage } from 'services';

const Context = createContext(null);

function Provider({ children }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    Storage.getArchiveNotes().then(setNotes);
    Storage.addListener((changes) => {
      if ('archiveNotes' in changes) setNotes(changes.archiveNotes.newValue);
    });
  }, []);

  const state = {
    notes,
  };
  const actions = {
    addNote: Storage.saveArchiveNote,
    removeNote: Storage.deleteArchiveNote,
  };
  return <Context.Provider value={[state, actions]}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node,
};

Provider.defaultProps = {
  children: null,
};

export default { Provider, Context };
