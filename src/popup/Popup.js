import React from 'react';

import { Main, Navigation, Queue } from './components';

import './index.css';

export default function Popup() {
  const noteList = [
    {
      id: 'abcdef',
      content: 'Lorem ipsum dolor sit amet',
      isUrgent: false,
    },
    {
      id: 'ghijkl',
      content: 'Lorem ipsum dolor sit amet',
      isUrgent: true,
    },
    {
      id: 'ghijklasa',
      content: 'Lorem ipsum dolor sit amet',
      isUrgent: false,
    },
    {
      id: 'ghijksdfgl',
      content: 'Lorem ipsum dolor sit amet',
      isUrgent: true,
    },
    {
      id: 'ghijkwedgfdwdl',
      content: 'Lorem ipsum dolor sit amet',
      isUrgent: false,
    },
  ];

  return (
    <div className="Popup">
      <Queue
        notes={noteList}
        onAdd={(newNote) => console.log(`add: ${newNote.content.slice(0, 10)}`)}
        onRemove={(id) => console.log(`remove: ${id}`)}
        onClose={() => console.log('close')}
      />
    </div>
  );
}
