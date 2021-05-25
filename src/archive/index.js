import React from 'react';
import ReactDOM from 'react-dom';

import { State } from 'services';
import Archive from './Archive.container';
import './index.css';

ReactDOM.render(
  <State.Archive.Provider>
    <Archive />
  </State.Archive.Provider>,
  document.getElementById('root'),
);
