import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { State } from 'services';
import Archive from './Archive';

const mockNotes = [
  {
    id: 'abc',
    content: 'lorem ipsum',
    isUrgent: false,
  },
  {
    id: 'abcd',
    content: '2lorem ipsum',
    isUrgent: true,
  },
  {
    id: 'abcde',
    content: 'lorem ipsum',
    isUrgent: false,
    a,
  },
];

function ArchiveContainer() {
  const [{ notes }, actions] = useContext(State.Archive.Context);
  return <Archive notes={mockNotes} removeNote={actions.removeNote} />;
}

ArchiveContainer.propTypes = {};

export default ArchiveContainer;
