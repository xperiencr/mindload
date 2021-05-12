import React from 'react';

import { Main, Navigation } from './components';

import './index.css';

export default function Popup() {
  return (
    <div className="Popup">
      <Main
        onCreateNote={(newNote) => {
          console.log('Note to be created: ');
          console.log(newNote);
        }}
      />
      <Navigation
        goHome={() => console.log('Went home')}
        openHelp={() => console.log('Opened help')}
      />
    </div>
  );
}
