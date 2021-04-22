import React from 'react';

import { QueueNote } from './components';

import './index.css';

export default function Popup() {
  return (
    <div className="Popup">
      <QueueNote
        content="Lorem ipsum dolor sit amet"
        onDiscard={() => console.log('Descartar')}
        onSave={() => console.log('Guardar')}
        urgent={false}
      />
      <QueueNote
        content="Lorem ipsum dolor sit amet"
        onDiscard={() => console.log('Descartar')}
        onSave={() => console.log('Guardar')}
        urgent={true}
      />
      <QueueNote
        content="Lorem ipsum dolor sit amet"
        onDiscard={() => console.log('Descartar')}
        onSave={() => console.log('Guardar')}
        urgent={false}
      />  
    </div>
  );
}
