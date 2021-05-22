import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { State } from 'services';

import Popup from './Popup';

function PopupContainer() {
  const [{ notes }, actions] = useContext(State.Queue.Context);
  const [, archiveActions] = useContext(State.Archive.Context);

  return (
    <Popup
      queueNotes={notes}
      createNote={actions.addNote}
      deleteNote={actions.deleteNote}
      createArchiveNote={archiveActions.addNote}
      openArchive={() => browser.tabs.create({ url: 'archive.html' })}
    />
  );
}

PopupContainer.propTypes = {};

export default PopupContainer;
