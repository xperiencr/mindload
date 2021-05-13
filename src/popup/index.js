import React from 'react';
import ReactDOM from 'react-dom';

import { State } from 'services';
import Popup from './Popup';

ReactDOM.render(
  <State.Archive>
    <State.Queue>
      <Popup />
    </State.Queue>
  </State.Archive>,
  document.getElementById('root'),
);
