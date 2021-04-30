import React from 'react';
import ReactDOM from 'react-dom';

import { Queue } from 'state';
import Popup from './Popup';

ReactDOM.render(
  <Queue.Context>
    <Popup />
  </Queue.Context>,
  document.getElementById('root')
);
