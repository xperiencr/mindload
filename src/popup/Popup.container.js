import React, { useContext } from 'react';
import Hotkeys from 'react-hot-keys';

import { State, Storage } from 'services';
import Popup from './Popup';

function PopupContainer() {
  const { notes } = useContext(State.Queue.Context);

  return (
    <Hotkeys keyName="ctrl+alt+a" onKeyDown={() => browser.tabs.create({ url: 'archive.html' })}>
      <Popup
        queueNotes={notes}
        createNote={Storage.saveQueueNote}
        deleteNote={Storage.deleteQueueNote}
        createArchiveNote={Storage.saveArchiveNote}
        openArchive={() => browser.tabs.create({ url: 'archive.html' })}
      />
    </Hotkeys>
  );
}

export default PopupContainer;
