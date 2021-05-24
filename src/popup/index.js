import React from 'react';
import ReactDOM from 'react-dom';

import { State } from 'services';
import Popup from './Popup.container';

ReactDOM.render(
  <State.Archive.Provider>
    <State.Queue.Provider>
      <Popup />
    </State.Queue.Provider>
  </State.Archive.Provider>,
  document.getElementById('root'),
);
