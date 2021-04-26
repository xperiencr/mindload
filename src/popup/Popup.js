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
        content="Lorem ipsum dolor sit amet consectetur adipiscing elit magnis montes aptent, 
        risus convallis ultricies duis velit praesent inceptos orci. Lobortis tempus proin 
        montes augue commodo velit senectus integer consequat, duis viverra curabitur sagittis 
        et mollis maecenas dictumst urna blandit, magnis lacus id class sollicitudin vitae 
        pulvinar eleifend. Aptent maecenas at potenti nisi hendrerit dignissim class lacus 
        mattis ornare donec dictum nullam purus, mauris luctus ligula dis massa primis curae 
        leo tempus ultrices felis cubilia."
        onDiscard={() => console.log('Descartar')}
        onSave={() => console.log('Guardar')}
        urgent={true}
      />
      <QueueNote
        content="Lorem ipsum dolor sit amet consectetur adipiscing elit magnis montes aptent, 
        risus convallis ultricies duis velit praesent inceptos orci. Lobortis tempus proin 
        montes augue commodo velit senectus integer consequat, duis viverra curabitur sagittis 
        et mollis maecenas dictumst urna blandit, magnis lacus id class sollicitudin vitae 
        pulvinar eleifend. Aptent maecenas at potenti nisi hendrerit dignissim class lacus 
        mattis ornare donec dictum nullam purus, mauris luctus ligula dis massa primis curae 
        leo tempus ultrices felis cubilia.

        Sodales vel nibh in accumsan magnis cras nulla ut tincidunt, hac placerat libero proin 
        conubia integer facilisis iaculis vulputate, tortor nunc penatibus et faucibus sem 
        volutpat platea. Nascetur diam sociis maecenas faucibus est vehicula consequat in, 
        habitant malesuada vitae porta semper parturient torquent cum, natoque vulputate arcu 
        tempus senectus ad dictumst. Vestibulum dignissim pellentesque nascetur pretium etiam 
        convallis sodales blandit ultrices senectus, sociis proin neque orci magna eleifend 
        natoque eros posuere, fringilla pulvinar habitant auctor venenatis montes consequat 
        placerat facilisis."
        onDiscard={() => console.log('Descartar')}
        onSave={() => console.log('Guardar')}
        urgent={false}
      />  
    </div>
  );
}
