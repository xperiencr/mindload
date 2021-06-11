import React, { useContext } from 'react';

import { State, Storage } from 'services';
import Archive from './Archive';

function ArchiveContainer() {
  const { notes } = useContext(State.Archive.Context);
  return <Archive notes={notes} removeNote={Storage.deleteArchiveNote} />;
}

export default ArchiveContainer;
