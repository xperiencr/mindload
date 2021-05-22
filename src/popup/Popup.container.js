import React from 'react';
import PropTypes from 'prop-types';

import Popup from './Popup';

function PopupContainer() {
  return <Popup openArchive={() => browser.tabs.create({ url: 'archive.html' })} />;
}

PopupContainer.propTypes = {};

export default PopupContainer;
