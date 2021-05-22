import React, { useState } from 'react';

import { Main, Navigation, HelpSection, Queue } from './components';

import './index.css';

export default function Popup({ createNote, openArchive }) {
  const [isHelpSection, setIsHelpSection] = useState(false);
  const [isQueue, setIsQueue] = useState(false);

  const baseContent = (
    <>
      <Main onCreateNote={createNote} />
      <Navigation
        goHome={openArchive}
        openHelp={() => setIsHelpSection(true)}
        openQueue={() => setIsQueue(true)}
      />
    </>
  );
  let content = null;
  if (isHelpSection) content = <HelpSection onClose={() => setIsHelpSection(false)} />;
  else if (isQueue) content = <Queue onClose={() => setIsQueue(false)} notes={[]} />;
  else content = baseContent;

  return <div className="Popup">{content}</div>;
}
