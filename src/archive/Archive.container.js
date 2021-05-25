import React, { useContext } from 'react';

import { State } from 'services';
import Archive from './Archive';

function ArchiveContainer() {
  const [{ notes }, actions] = useContext(State.Archive.Context);
  return <Archive notes={notes} removeNote={actions.removeNote} />;
}

export default ArchiveContainer;
