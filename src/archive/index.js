import React from 'react';
import ReactDOM from 'react-dom';

import { State } from 'services';

import './index.css';

function Archive() {
  return null;
}

ReactDOM.render(
  <State.Archive.Provider>
    <Archive />
  </State.Archive.Provider>,
  document.getElementById('root'),
);
