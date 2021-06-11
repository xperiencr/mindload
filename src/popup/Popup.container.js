import React, { useContext } from 'react';

import { State, Storage } from 'services';
import Popup from './Popup';

function PopupContainer() {
  const { notes } = useContext(State.Queue.Context);

  return (
    <Popup
      queueNotes={notes}
      createNote={Storage.saveQueueNote}
      deleteNote={Storage.deleteQueueNote}
      createArchiveNote={Storage.saveArchiveNote}
      openArchive={() => browser.tabs.create({ url: 'archive.html' })}
    />
  );
}

export default PopupContainer;
