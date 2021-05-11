import React from 'react';
import ReactDOM from 'react-dom';

import { Queue } from 'state';
import Popup from './Popup';

ReactDOM.render(
  <Queue.Provider>
    <Popup />
  </Queue.Provider>,
  document.getElementById('root'),
);
